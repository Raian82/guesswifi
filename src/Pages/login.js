import React, { useState } from "react";
import "./login.css";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic
    console.log(`Logging in with ${username} and ${password}`);
  };

  return (
    <div className="container">
      <h1 className="title">Guess</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Username:
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button className="button" type="submit">
          Sign-in
        </button>
        <div style={{direction:'column', display: 'flex'}}>
          <p>Don't have an account?</p>
          <Link component={RouterLink} to="/Signup" style={{marginTop: 15}}>
            Sign
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
