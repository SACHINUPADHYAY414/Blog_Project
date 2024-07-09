import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const NotesForm = () => {
  const [title, setTitle] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = "http://localhost:5000/api/notes/addNote";

      const data = {
        title,
        download_link: downloadLink,
        image
      };

      const response = await axios.post(apiUrl, data);

      // Reset form fields
      setTitle("");
      setDownloadLink("");
      setImage("");

      // Show success toast
      toast.success("Note added successfully");
      console.log("Response from server:", response.data);
    } catch (error) {
      // Handle error
      console.error("Error:", error);
      toast.error("Error adding note. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl text-gray-600 font-bold text-start mb-4 mt-4 px-4 py-4">
        <span className="text-blue-600">Add</span> Notes
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value.toUpperCase())}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="downloadLink" className="block mb-1">
            Download Link
          </label>
          <input
            type="text"
            id="downloadLink"
            value={downloadLink}
            onChange={(e) => setDownloadLink(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="image" className="block mb-1">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotesForm;
