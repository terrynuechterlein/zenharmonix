import React from 'react';
import './signup.css'; 
import Button from '../../Components/Button'; 

const SignUp = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <div className="buttons">
          <Button type="submit">Sign Up</Button>
          <Button type="button">Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
