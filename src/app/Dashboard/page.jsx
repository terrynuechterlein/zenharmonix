"use client";
import React, {useState} from "react";
import "./dashboard.css";
import {
  BlackHoverBtn,
  WhiteToBlackBtn,
  WhiteOutlineBtn,
} from "../../Components/Button";
import Image from "next/image";
import Navbar from "../../Components/Navbar";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {FiSearch} from "react-icons/fi"; // Import the search icon from 'react-icons'
import SearchBar from "../../Components/SearchBar";
import CategoryDropdown from "../../Components/CategoryDropdown";
import Tag from "../../Components/Tag";
import {FaHeart, FaRegHeart} from "react-icons/fa";

const Dashboard = () => {
  const [category, setCategory] = useState("mood");
  const [activeTab, setActiveTab] = useState("search");
  const [showCategories, setShowCategories] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [tags, setTags] = useState([]);
  const [songs, setSongs] = useState([]);

  const toggleLikeSong = async (songId) => {
    // Update only the targeted song's isLiked status
    const updatedSongs = songs.map((song) =>
      song.id === songId ? {...song, isLiked: !song.isLiked} : song
    );
    setSongs(updatedSongs);

    try {
      const response = await fetch(
        `http://localhost:8081/api/v1/songs/like/${songId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Assuming token is globally available or from context/store
          },
        }
      );
      if (!response.ok)
        throw new Error("Failed to toggle like status on the server");
    } catch (error) {
      console.error("Error updating like status:", error);
      // Optionally roll back local change if server update fails
    }
  };

  // Function to call the YouTube playlist fetch endpoint using fetch API
  const fetchSongs = () => {
    // Prepare the URL with query parameters
    const queryParams = new URLSearchParams({tags: tags.join(",")}).toString();
    const url = `http://localhost:8081/api/v1/playlists?${queryParams}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const songsWithLikeStatus = data.map((song) => ({
          ...song,
          isLiked: false,
        }));
        setSongs(songsWithLikeStatus);
        setActiveTab("output");
        console.log(data); // Handle displaying the playlists here
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
      });
  };

  const tabTitles = ["Search", "Output"];

  // Add this to your search button's onClick handler
  const onSearchClick = () => {
    fetchSongs();
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleAddTag = (newTag) => {
    if (tags.length < 3 && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const renderSearch = () => (
    <>
      <div className="welcome_message">Your playlist awaits</div>
      <div className="search_controls">
        <CategoryDropdown
          category={category}
          setShowCategories={setShowCategories}
          showCategories={showCategories}
          handleCategorySelect={handleCategorySelect}
        />
        <SearchBar
          category={category}
          placeholder={`Choose your ${category}`}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          showOptions={showOptions}
          setShowOptions={setShowOptions}
          onSelectOption={handleAddTag}
        />
        <button className="search_button" onClick={fetchSongs}>
          <FiSearch className="search_icon" />
        </button>
      </div>
      <div className="tag-container">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            text={tag}
            onRemove={() => setTags(tags.filter((t) => t !== tag))}
          />
        ))}
      </div>
      <div className="tag-message">
        {tags.length < 3 ? (
          "Select up to 3 tags"
        ) : (
          <span className="max-tags">Max tags selected</span>
        )}
      </div>
    </>
  );

  const renderOutput = () => (
    <div className="songs-container">
      {songs.map((song) => (
        <div key={song.id} className="song">
          <Image
            src={song.thumbnailUrl}
            alt={song.title}
            className="song-thumbnail"
            width={500}
            height={280}
            layout="responsive"
          />
          <div className="song-info">
            <h4 className="song-title">{song.title}</h4>
            <a
              href={`https://www.youtube.com/watch?v=${song.youtubeVideoId}`}
              target="_blank"
              rel="noopener noreferrer">
              Watch
            </a>
            <button
              aria-label={song.isLiked ? "Unlike this song" : "Like this song"}
              className={`like-button ${song.isLiked ? "liked" : ""}`}
              onClick={() => toggleLikeSong(song.id)} // Pass the song's id
            >
              {song.isLiked ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container_dashboard">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabTitles={["Search", "Output"]}
      />
      <div className="main_content">
        {activeTab === "search" ? renderSearch() : renderOutput()}
      </div>
    </div>
  );
};
export default Dashboard;
