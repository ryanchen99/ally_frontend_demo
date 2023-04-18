import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Login />} exact />
          <Route path="/file" element={<Main />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
