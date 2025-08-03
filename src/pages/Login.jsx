import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Login = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const admin = "admin";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleusername = (e) => {
    setUsername(e.target.value);
  };
  const handlepassword = (e) => {
    setPassword(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (username === admin && password === "admin") {
      logIn();
      navigate("/");
    } else {
      alert("Invalid username or password.");
    }
    setUsername("");
    setPassword("");
  };
  return (
    <div className="login-page">
      <form onSubmit={handlesubmit} className="Login-main-div">
        <h1 className="Login-page-title"> Note Login</h1>
        <div className="login-form">
          <div className="login-form-2">
            <div className="login-form-1">
              <label htmlFor="Usernname">UserName :</label>
              <input
                type="text"
                id="Username"
                value={username}
                onChange={handleusername}
                required
              />
            </div>
            <div className="login-form-1">
              <label htmlFor="Password">Password :</label>
              <input
                type="password"
                id="Password"
                value={password}
                onChange={handlepassword}
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
