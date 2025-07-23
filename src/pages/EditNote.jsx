import React, { useState } from "react";
import Header from "../componets/Header";

const EditNote = () => {
  const [title, setTitle] = useState("Tiitle");
  const [body, setBody] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus corrupti dolores itaque illum eius labore,consequatur sint iste quasi sit dolore fugit similique qui."
  );
  const handletitle = (e) => {
    setTitle(e.target.value);
  };
  const handlebody = (e) => {
    setBody(e.target.value);
  };
  return (
    <div>
      <Header />
      <div className="AddNote-cont">
        <form className="AddNote-main">
          <div className="AddNote-title">
            <label htmlFor="Title">Title :</label>
            <input
              type="text"
              name="Title"
              id="Title"
              value={title}
              onChange={handletitle}
            />
          </div>
          <div className="AddNote-body">
            <label htmlFor="Body">Body :</label>
            <input
              type="text"
              name="Body"
              id="Body"
              value={body}
              onChange={handlebody}
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

export default EditNote;
