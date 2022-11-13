import { Routes, Route } from "react-router-dom";
import Signup from "./components/Singup";
import Home from "./components/Home";
import Login from "./components/Login";
import Private from "../src/components/Private";
import LogOut from "./components/Logout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/private" element={<Private />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Signup />} />
      <Route path="/logout" element={<LogOut />} />
    </Routes>
  );
}
export default App;
