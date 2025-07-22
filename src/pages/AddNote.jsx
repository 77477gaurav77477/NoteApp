import React from "react";
import Header from "../componets/Header";
import "./AddNote.css";

const AddNote = () => {
  return (
    <div>
      <Header />
      <div className="AddNote-cont">
        <form className="AddNote-main">
          <div className="AddNote-title">
            <label htmlFor="Title">Title :</label>
            <input type="text" name="Title" id="Title" required />
          </div>
          <div className="AddNote-body">
            <label htmlFor="Body">Body :</label>
            <input type="text" name="Body" id="Body" required />
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
