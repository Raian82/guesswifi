import React, { useState } from 'react';
import '../css/signup.css';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

function Signup() {
  const [IDNumber, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic
    console.log(
      `Signing up with ${IDNumber}, ${email}, ${password}, and ${confirmPassword}`
    );
  };

  return (
    <div className="container">
      <h1 className="title">Sign Up for Guess</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          ID Number:
          <input
            className="input"
            type="text"
            value={IDNumber}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className="label">
          Email:
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label className="label">
          Password:
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label className="label">
          Confirm Password:
          <input
            className="input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="button" type="submit">
          Sign Up
        </button>
        <div style={{ direction: 'column', display: 'flex' }}>
          <p>Already have an account?</p>
          <Link component={RouterLink} to="/" style={{ marginTop: 15 }}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
