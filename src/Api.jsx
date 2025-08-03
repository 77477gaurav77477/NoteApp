import axios from "axios";

const API_KEY = "$2a$10$zyRVp2KWJuHoUolReypz7.mT0SWRpHWwpo6QeWK903O3EplPj1wXC";
const ACCSESS_KEY =
  "$2a$10$VZZXIGl3POw/RxTF0oeF3uMxCPkcl74Kz8C2bRKFX.cPhkux.LF5m";
const API_URL = "https://api.jsonbin.io/v3/b/6882ebf9ae596e708fbb58e3";

export const getNotes = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "X-Access-Key": ACCSESS_KEY,
        "Content-Type": "application/json",
      },
    });
    return response.data.record;
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
};
export const addNote = async (newNote) => {
  const notes = await getNotes();
  const data = notes.record;
  const updatedNotes = [...data, newNote];

  const response = await axios.put(
    API_URL,
    { record: updatedNotes },
    {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
      },
    }
  );
};

export const editNote = async (newNote, id) => {
  const notes = await getNotes();
  const updatedNotes = notes.record.map((note) =>
    note.id === id ? newNote : note
  );

  const response = await axios.put(
    API_URL,
    { record: updatedNotes },
    {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
      },
    }
  );
};
export const deleteNote = async (noteId) => {
  const notes = await getNotes();
  const updatedNotes = notes.record.filter((note) => note.id !== noteId);
  const response = await axios.put(
    API_URL,
    { record: updatedNotes },
    {
      headers: {
        "X-Master-Key": API_KEY,
        "Content-Type": "application/json",
      },
    }
  );
};
export const getNote = async (id) => {
  const notes = await getNotes();
  const note = notes.record.filter((note) => note.id === id)[0];
  if (!note) {
    throw new Error(`Note with id ${id} not found`);
  }
  return note;
};
