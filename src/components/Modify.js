import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import DoubleCheck from "./DoubleCheck";

export default function Modify(props) {
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [modify, setModify] = useState(props.info);
  const [url, setUrl] = useState(props.document_url);

  useEffect(() => {
    console.log(665,modify);
  },[modify])

  const handleModify = (e) => {
    const { name, value } = e.target;
    setModify(prevState => ({ ...prevState, [name]: value }));
  };
  
  function getInfoList() {
    const components = [];
    Object.entries(modify).forEach(([key, value]) => {
      components.push(
        <div key={key}>
          <label>{key}</label>
          <input
            type="text"
            name={key}
            value={value}
            onChange={(e) => {
              handleModify(e);
            }}
          ></input>
        </div>
      );
    });
    return components;
  }
  return (
    <div className="modify-container">
      <div>{url}</div>
      <form>{getInfoList()}</form>
      <button
        className="modify-button"
        onClick={() => {
          setDoubleCheck(true);
        }}
      >
        Confirm Modify
      </button>
      {doubleCheck && (
        <DoubleCheck
          info={modify}
          url={url}
          client={Cookies.get("user")}
          closePopup={() => {
            setDoubleCheck(false);
          }}
        />
      )}
    </div>
  );
}

/*    <div className="modify-container">
      <form>{getInfoList()}</form>
      <button className="modify-button" onClick={setDoubleCheck(true)}>
        Upload
      </button>
      {doubleCheck && <DoubleCheck handleConfirm={handleConfirm} />}
    </div> */

/*
    Object.entries(props.info).map((value, key) => {
      components.push(
        <div>
          <title>{key}</title>
          <input type="text" name={key} value={modify[key]} onChange={setModify({...modify, key:value})}></input>
        </div>
      );
    });*/
