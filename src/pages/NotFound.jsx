import React from "react";
import Header from "../componets/Header";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import image from "../assets/Images/Sad-robo-dog.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="Not-Found-cont">
      <Header />

      <div className="Not-Found-main-cont">
        <img src={image} alt="" className="NotFound-img" />

        <h2>404 Page Not Found</h2>
        <button
          className="login-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
