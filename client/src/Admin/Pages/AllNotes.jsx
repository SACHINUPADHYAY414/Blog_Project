import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllNotes = () => {
  const [notes, setNotes] = useState([]);
  const [editNotesId, setEditNotesId] = useState(null);
  const [updatedNotes, setUpdatedNotes] = useState({
    image: "",
    title: "",
    pdf: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/notes/getAllNotes");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = async (note_id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/notes/updatenotes/${note_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedNotes),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const updatedNotesResponse = await response.json();
      console.log("Notes updated successfully:", updatedNotesResponse);
      toast.success("Notes updated successfully");
  
      fetchData();
      setEditNotesId(null);
    } catch (error) {
      console.error("Error updating notes:", error);
      toast.error("Error updating notes");
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedNotes((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const startEditing = (note) => {
    setEditNotesId(note.note_id);
    setUpdatedNotes({
      image: note.image,
      title: note.title,
      pdf: note.pdf,
    });
  };
  
  const cancelEditing = () => {
    setEditNotesId(null);
  };

  const handleDelete = async (note_id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/notes/deleteNote/${note_id}`,
        {
          method: "DELETE"
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setNotes(notes.filter((note) => note.note_id !== note_id));
      toast.success(`Note with ID ${note_id} deleted successfully`);
      console.log(`Deleted note with ID ${note_id}`);
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Error deleting note");
    }
  };

  return (
    <div className="py-4 px-2 sm:px-2 lg:px-4">
      <h2 className="text-3xl text-gray-600 font-bold text-start mb-4 mt-4 px-4 py-4">
        <span className="text-blue-600">All</span> Notes
      </h2>
      <div className="mt-4 overflow-hidden border border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 font-bold">
            <tr className="font-bold">
              <th className="px-4 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-4 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-4 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-4 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">
                PDF
              </th>
              <th className="px-4 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y text-center divide-gray-200">
            {notes.map((note) => (
              <tr key={note.note_id}>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {note.note_id}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-left text-sm text-gray-500">
                  {editNotesId === note.note_id ? (
                    <input
                      type="text"
                      name="title"
                      value={updatedNotes.title}
                      onChange={handleInputChange}
                      className="border border-gray-300"
                    />
                  ) : (
                    note.title
                  )}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-left text-sm text-gray-500">
                  {editNotesId === note.note_id ? (
                    <input
                      type="text"
                      name="image"
                      value={updatedNotes.image}
                      onChange={handleInputChange}
                      className="border border-gray-300"
                    />
                  ) : (
                    note.image
                  )}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  <a
                    href={note.download_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    View PDF
                  </a>
                </td>
                <td className="px-4 py-4 text-center text-sm">
                  {editNotesId === note.note_id ? (
                    <>
                      <button
                        className="text-green-600 hover:text-green-900"
                        onClick={() => handleEdit(note.note_id)}
                      >
                        Save
                      </button>
                      <button
                        className="ml-2 text-red-600 hover:text-red-900"
                        onClick={cancelEditing}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="ml-2 text-red-600 hover:text-red-900"
                        onClick={() => startEditing(note)}
                      >
                        Edit
                      </button>
                      <button
                        className="ml-2 text-red-600 hover:text-red-900"
                        onClick={() => handleDelete(note.note_id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllNotes;
