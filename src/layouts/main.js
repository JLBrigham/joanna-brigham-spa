import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.js";

function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="content"></div>
    </div>
  );
}

export default Main;
