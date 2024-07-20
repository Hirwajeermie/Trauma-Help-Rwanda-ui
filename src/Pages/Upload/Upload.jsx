// src/components/FileUpload.js

import React, { useState } from 'react';
import './Upload.css';

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);
    setSelectedFiles(fileList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload logic here
    console.log(selectedFiles);
  };

  return (
    <div className="file-upload">
      <h2>Upload PDF and JPG Files</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          accept=".pdf,.jpg" 
          multiple 
          onChange={handleFileChange}
          className="file-input"
        />
        <button type="submit" className="upload-button">Upload</button>
      </form>
      {selectedFiles.length > 0 && (
        <div className="file-list">
          <h3>Selected Files:</h3>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default Upload;
