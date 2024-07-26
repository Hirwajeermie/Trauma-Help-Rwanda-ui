import { useState, useEffect } from 'react';
import axios from '../../axios';
import './Report.css';

const ViewFile = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    console.log('Report mounted');
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

  const getMimeType = (filename) => {
    // Determine MIME type based on file extension
    const extension = filename.split('.').pop().toLowerCase();
    switch (extension) {
      case 'pdf':
        return 'application/pdf';
      case 'png':
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg';
      case 'txt':
        return 'text/plain';
      case 'doc':
      case 'docx':
        return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      case 'xls':
      case 'xlsx':
        return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      default:
        return 'application/octet-stream'; 
    }
  };

  const viewFile = async (filename) => {
    try {
      const mimeType = getMimeType(filename);
      const response = await axios.get(`/files/uploads/${filename}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data], { type: mimeType }));
      window.open(url, '_blank'); 
    } catch (error) {
      console.error('Error viewing file:', error);
    }
  };

  return (
    <div className="ViewFile">
      <h1>Reports</h1>
      <ul>
        {Array.isArray(files) && files.length > 0 ? (
          files.map((file) => (
            <li key={file._id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`Clicked on file: ${file.filename}`);
                  viewFile(file.filename);
                }}
              >
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

export default ViewFile;
