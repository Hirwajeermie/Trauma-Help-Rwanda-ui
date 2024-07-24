import { useState, useEffect } from 'react';
import axios from '../../axios'; 
import './Report.css';

const Report = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    console.log('ViewFile mounted');
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get('/files');
      console.log('Files fetched:', response.data);

      if (response.data.files && Array.isArray(response.data.files)) {
        setFiles(response.data.files);
      } else {
        console.error('Expected an array of files but got:', response.data);
      }
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  return (
    <div className="Report">
      <h1>Reports</h1>
      <ul>
        {Array.isArray(files) && files.length > 0 ? (
          files.map((file) => (
            <li key={file._id}>
              <a href={`/uploads/${file.filename}`} target="_blank" rel="noopener noreferrer">
                {file.filename || 'No filename'}
              </a>
            </li>
          ))
        ) : (
          <li>No files found</li>
        )}
      </ul>
    </div>
  );
};

export default Report;
