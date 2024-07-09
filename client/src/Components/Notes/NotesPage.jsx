import React, { useState, useEffect } from "react";
import axios from "axios";
import NotesCard from "./NotesCard";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/notes/getAllNotes"
      );
      setNotes(response.data);
    } catch (err) {
      console.error("Error fetching notes", err);
    }
  };

  return (
    <div className="w-full h-full">
      <h2 className="text-3xl text-gray-600 font-bold text-start mb-4 mt-4 px-4 py-4">
        <span className="text-blue-600">All</span> Notes
      </h2>
      <div className="justify-center items-center mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 ml-4 mr-4">
        {notes.map((note) => (
          <NotesCard key={note.note_id} Notes={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesPage;