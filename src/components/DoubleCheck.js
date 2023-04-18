import React from "react";
import "./style.css";
import axios from "axios";

export default function DoubleCheck(props) {
  function handleConfirm() {
    console.log("info modify:",props.info);
    axios
      .post("http://44.204.83.244:8000/confirm_document/", { docu: props.info, document_url:props.url, client_id:props.client })
      .then((response) => {
        if (response.status === 201) {
          console.log("upload Succesfully!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="double-check-container">
      <label>Sure to upload you file?</label><br/>
      <button className="back" onClick={props.closePopup}>Cancel</button>
      <button className="modify-button" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
}
// /
