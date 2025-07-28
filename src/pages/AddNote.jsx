import React, { useState } from "react";
import Header from "../componets/Header";
import "./AddNote.css";
import { addNote } from "../Api";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleBody = (e) => {
    setBody(e.target.value);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (title && body) {
      const id = Date.now().toString();
      const note = { id, title, body };
      await addNote(note);
      setTitle("");
      setBody("");
      alert("Note added successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <div>
      <Header />
      <div className="AddNote-cont">
        <form className="AddNote-main" onSubmit={handlesubmit}>
          <div className="AddNote-title">
            <label htmlFor="Title">Title :</label>
            <input
              type="text"
              value={title}
              name="Title"
              id="Title"
              onChange={handleTitle}
            />
          </div>
          <div className="AddNote-body">
            <label htmlFor="Body">Body :</label>
            <input
              type="text"
              value={body}
              name="Body"
              id="Body"
              onChange={handleBody}
            />
          </div>
          <div className="AddNote-btns">
            <button type="submit" className="green-btn">
              Save
            </button>
            <button type="reset" className="red-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
