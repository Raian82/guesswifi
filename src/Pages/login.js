import * as React from 'react';
import '../css/login.css';
import { guess, msu, cics, dis, loginPic } from '../Assets/index';

export default function Login() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <div className="img_container">
              <img className="guess_logo" src={guess} alt="guess" />
            </div>
            <h2 className="signintitle">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <div className="msu-logo">
              <img src={msu} alt="msu" className="img_logo" />
              <img src={cics} alt="cics" className="img_logo" />
              <img src={dis} alt="dis" className="img_logo" />
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <div className="msu-logo">
              <img src={msu} alt="msu" className="img_logo" />
              <img src={cics} alt="cics" className="img_logo" />
              <img src={dis} alt="dis" className="img_logo" />
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h2 className='welcome_title'>Welcome MSUans!</h2>
            <p>
              Stay connected with GUESS to the world of endless possibilities, and unlock new discoveries every day! 
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={loginPic} className="image" alt="asd" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Join us and be part of unlocking discoveries!
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={loginPic} className="image" alt="asd" />
        </div>
      </div>
    </div>
  );
}
