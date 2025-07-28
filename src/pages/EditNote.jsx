import React, { useState, useEffect } from "react";
import Header from "../componets/Header";
import { getNote, editNote } from "../Api";
import { useParams } from "react-router-dom";

const EditNote = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handletitle = (e) => {
    setTitle(e.target.value);
  };
  const handlebody = (e) => {
    setBody(e.target.value);
  };

  useEffect(() => {
    if (id) {
      const fetchNote = async () => {
        const response = await getNote(id);
        setTitle(response.title);
        setBody(response.body);
      };
      fetchNote();
    } else console.log(`Id ${id} not found`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = { id, title, body };
    editNote(note, id);
  };

  return (
    <div>
      <Header />
      <div className="AddNote-cont">
        <form className="AddNote-main" onSubmit={handleSubmit}>
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
