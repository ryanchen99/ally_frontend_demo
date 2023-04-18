import React from "react";
import "./style.css";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
  const [user, setUser] = useState(null);
  function login() {
    console.log(user);
    axios
      .post("http://44.204.83.244:8000/client_documents/", { "id": user })
      .then((response) => {
        if (response.data.documents) {
          Cookies.set("user", user);
          Cookies.set("document", JSON.stringify(response.data.documents));
          window.location.href = "/file";
        } else console.log("no file received");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <form>
        <label>UserName</label>
        <input
          type="text"
          name="username"
          required
          onChange={(e) => setUser(e.target.value)}
        ></input>
      </form>
      <button onClick={login}>Login and Go to File</button>
    </div>
  );
}
