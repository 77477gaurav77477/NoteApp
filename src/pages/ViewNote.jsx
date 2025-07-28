import React, { use, useEffect, useState } from "react";
import Header from "../componets/Header";
import "./ViewNote.css";
import { useNavigate, useParams } from "react-router-dom";
import { getNote, deleteNote } from "../Api";

const ViewNote = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState({});
  useEffect(() => {
    const fetchNote = async () => {
      const respone = await getNote(id);
      setNote(respone);
    };
    fetchNote();
  }, []);
  const handledelete = async () => {
    try {
      await deleteNote(id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };
  return (
    <div>
      <Header />

      <div className="ViewNote-cont">
        <div className="ViewNote-main">
          <div className="ViewNote-content">
            <h1>{note.title}</h1>
            <p>{note.body}</p>
          </div>
          <div className="ViewNote-btn-cont">
            <button
              className="yellow-btn"
              onClick={() => navigate(`/EditNote/${note.id}`)}
            >
              Edit
            </button>
            <button className="red-btn" onClick={handledelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
