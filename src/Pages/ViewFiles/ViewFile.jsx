import React, { useState, useEffect } from 'react';
import axios from '../../axios'; 
import './ViewFile.css';

const ViewFile = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    console.log('ViewFile mounted');
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get('/files'); 
      console.log('Files fetched:', response.data);

      // Handle the response to get the array of files
      if (response.data.files && Array.isArray(response.data.files)) {
        setFiles(response.data.files);
      } else {
        console.error('Expected an array of files but got:', response.data);
      }
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const deleteFile = async (fileId) => {
    try {
      await axios.delete(`/files/${fileId}`); 
      console.log('File deleted:', fileId);
      fetchFiles(); 
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <div className="ViewFile">
      <h1>View Files</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(files) && files.length > 0 ? (
            files.map((file) => (
              <tr key={file._id}>
                <td>{file.filename}</td> 
                <td>
                  <button onClick={() => deleteFile(file._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No files found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewFile;
