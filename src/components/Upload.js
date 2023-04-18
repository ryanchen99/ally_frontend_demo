import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function Upload(props) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  function handleUpload(e) {
    e.preventDefault(); // Prevent the default form submission behavior
  
    if (!file) {
      console.log("No file selected");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user", Cookies.get("user")); // Add the user information to the FormData object
    
    axios
      .post("http://44.204.83.244:8000/file_upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        response.data.info
          ? props.checkUpload(response.data)
          : props.checkUpload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

  useEffect(() => {
    console.log("I got file:",file);
  }, [file]);

  return (
    <div className="upload-container">
      <form>
        <input
          type="file"
          name="filename"
          required
          onChange={(e) => handleFileChange(e)}
        ></input>
        <br />
        <button onClick={handleUpload}>Upload File</button>
      </form>
    </div>
  );
}
