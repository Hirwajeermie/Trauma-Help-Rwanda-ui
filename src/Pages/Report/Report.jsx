import { useState, useEffect } from "react";
import axios from "../../axios";
import "./Report.css";

const ViewFile = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    console.log("Report mounted");
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get("/files");
      console.log("Files fetched:", response.data);

      if (response.data.files && Array.isArray(response.data.files)) {
        setFiles(response.data.files);
      } else {
        console.error("Expected an array of files but got:", response.data);
      }
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const downloadFile = async (file) => {
    
    const downloadUrl = `/files/${file.filename}`;
  
    try {
     
      const response = await axios.get(downloadUrl, {
        responseType: 'blob', 
      });
  
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", file.filename); 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); 
      window.URL.revokeObjectURL(url); 
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  

  return (
    <div className="Report">
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
                  downloadFile(file); 
                }}
              >
                {file.filename || "No filename"}
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
