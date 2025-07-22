import React from "react";
import Header from "../componets/Header";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="Home-cont">
        <div className="Home-main">
          <div className="slider">
            <div className="card">
              <div className="card-content">
                <h2>Tiitle</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus corrupti dolores itaque illum eius labore,
                  consequatur sint iste quasi sit dolore fugit similique qui.
                </p>
              </div>
              <div className="card-btn">
                <button className="login-btn">View</button>
                <button className="yellow-btn">Edit</button>
              </div>
            </div>
          </div>
          <button className="green-btn">Add Note</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
