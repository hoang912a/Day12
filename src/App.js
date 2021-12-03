import "./App.css";
import NavbarPublic from "./Components/NavbarPublic";
import Banner from "./Components/Banner";
import { Layout } from "antd";
import { render } from "@testing-library/react";
import CityIndex from "./Components/CityIndex";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Routes,
} from "react-router-dom";
import Login from "./Auth/Login";
import Home from "./Hide/Home";
import Register from "./Hide/Register";

function App() {
  return (
    <div class="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trynow" element={<Login />} />
          <Route path="/help" />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
