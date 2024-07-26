import React, { useState } from 'react';
import './Upload.css';
import axios from '../../axios'; 
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);
    setSelectedFiles(fileList);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('file', file);
    });

    try {
      const response = await axios.post('/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
       
      console.log('Files uploaded successfully:', response.data);
      setSelectedFiles([]);
      navigate("/viewfile");
    } catch (error) {
      console.error('File upload failed:', error.response?.data || error.message);
      setError('File upload failed.');
    }
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
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Upload;
