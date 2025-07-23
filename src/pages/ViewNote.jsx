import React from "react";
import Header from "../componets/Header";
import "./ViewNote.css";
import { useNavigate } from "react-router-dom";

const ViewNote = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="ViewNote-cont">
        <div className="ViewNote-main">
          <div className="ViewNote-content">
            <h1>This is Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              aliquam nam ipsa iste corporis praesentium neque, perferendis
              illum quis similique rem quod officiis cumque cupiditate expedita
              nihil.
            </p>
          </div>
          <div className="ViewNote-btn-cont">
            <button
              className="yellow-btn"
              onClick={() => navigate("/EditNote")}
            >
              Edit
            </button>
            <button className="red-btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
