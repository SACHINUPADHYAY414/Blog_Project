import React, { useState } from "react";
import axios from "axios";

const NotesCard = ({ Notes, onDownload }) => {
  const [downloadCount, setDownloadCount] = useState(Notes.download_count || 0);

  const handleDownload = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/notes/${Notes.note_id}/incrementDownload`
      );
      if (response.data.message === "Download notes successfully") {
        setDownloadCount();
      }
    } catch (err) {
      console.error(
        `Error updating download count for note ${Notes.note_id}`,
        err
      );
    }
  };

  return (
    <div className="h-full max-w-sm rounded overflow-hidden shadow-lg drop-shadow-xl bg-white transition duration-150 ease-in-out hover:shadow-xl hover:-translate-y-2 mb-4">
      {Notes.image && (
        <img
          className="w-full h-52 px-5 py-2"
          src={Notes.image}
          alt={Notes.title}
        />
      )}

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{Notes.title}</div>
      </div>
      <div className="flex justify-center items-center gap-6 pb-4">
        {Notes.download_link && (
          <a
            href={Notes.download_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block ring ring-blue-500 ring-offset-2 ring-offset-slate-50 red:ring-offset-slate-900 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition"
            onClick={handleDownload}
          >
            Download PDF
          </a>
        )}
      </div>
      <p className="text-md text-center">Total Downloads: {downloadCount}</p>
    </div>
  );
};

export default NotesCard;