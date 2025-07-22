import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="Login-main-div">
        <h1 className="Login-page-title"> Note Login</h1>
        <div className="login-form">
          <form action="">
            <div className="login-form-1">
              <label htmlFor="Usernname">UserName :</label>
              <input type="text" id="Username" />
            </div>
            <div className="login-form-1">
              <label htmlFor="Password">Password :</label>
              <input type="password" id="Password" />
            </div>
          </form>
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
