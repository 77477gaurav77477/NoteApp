import React from "react";
import logoutBtn from "../assets/Images/log-out.png";
import tempLogo from "../assets/Heading.png";
import "./Header.css";
import sun from "../assets/Images/Sun.png";
import moon from "../assets/Images/Moon.png";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="Header-cont">
      <nav>
        <div className="logo">
          <img src={tempLogo} alt="Note App" onClick={() => navigate("/")} />
        </div>

        <div className="Header-btns">
          <div>
            <input
              type="checkbox"
              class="checkbox"
              id="checkbox"
              onChange={toggleTheme}
            />
            <label for="checkbox" class="checkbox-label">
              <img src={sun} alt="" />
              <img src={moon} alt="" />
              <span class="ball"></span>
            </label>
          </div>
          <button className="logutbtn" onClick={() => navigate("/login")}>
            <img src={logoutBtn} alt="O" /> Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
