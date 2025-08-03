import React, { useEffect, useState } from "react";
import Header from "../componets/Header";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { getNotes } from "../Api";

const Home = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      const fetchNotes = await getNotes();
      setNotes(fetchNotes.record);
    };
    fetchNotes();
  }, []);
  const navigate = useNavigate();
  return (
    <div >
      <Header />
      <div className="Home-cont">
        <div className="Home-main">
          <div className="slider">
            {notes &&
              notes.map((note) => (
                <div className="card" key={note.id}>
                  <div className="card-content">
                    <h2>{note.title}</h2>
                    <p>{note.body}</p>
                  </div>
                  <div className="card-btn">
                    <button
                      className="login-btn"
                      onClick={() => navigate(`/ViewNote/${note.id}`)}
                    >
                      View
                    </button>
                    <button
                      className="yellow-btn"
                      onClick={() => navigate(`/EditNote/${note.id}`)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <button className="green-btn" onClick={() => navigate("/AddNote")}>
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
