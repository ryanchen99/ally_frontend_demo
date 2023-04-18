import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import Upload from "./Upload";
import Modify from "./Modify";
export default function Main(props) {
  const [upload, setUpload] = useState(null); //default=false
  const [document, setDocument] = useState([]); //default=

  function allFiles() {
    const documentCookie = Cookies.get("document");
    const documentList = JSON.parse(documentCookie);
    const components = [];
    documentList.forEach((document) => {
      components.push(<div>{document}</div>);
    });
    return <div className="documents">{components}</div>;
  }

  function checkUpload(status) {
    setUpload(status);
  }

  function getOptions() {
    const fileTypes = [
      "Armed Forces of the U.S. ID Card (front and back)",
      "Birth Certificate",
      "Copy of Death Certificate",
      "Death Notification Entry - Federal Government",
      "Divorce Decree",
      "Driver's License",
      "Executor Documents (For an estate, but not an IRA)",
      "Google Maps/USPS Address Search",
      "Latest, best data provided by customer",
      "Legal Name Change Document",
      "LexisNexis",
      "LexisNexis - For minor spelling corrections",
      "Marriage Certificate",
      "Medicare Card",
      "Notice of Reclamation - Federal Government",
      "Obituary",
      "Original Death Certificate",
      "Permanent Resident Card",
      "Signed Social Security Card",
      "Signed SSN Card w/new name",
      "State Issued ID",
      "U.S. Military Card",
      "U.S. Passport Card",
      "W-2",
      "W-9",
    ];
    const selectbox = [];
    fileTypes.forEach((fileType) => {
      selectbox.push(
        <option key={fileType} value={fileType}>
          {fileType}
        </option>
      );
    });
    return selectbox;
  }

  return (
    <div className="search-container">
      <div>These File Uploaded</div>
      {allFiles()}

      <Upload checkUpload={checkUpload} />
      {upload && <Modify info={upload.info} document_url={upload.document_url} />}
    </div>
  );
}
