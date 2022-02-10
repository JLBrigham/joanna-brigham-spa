import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.js";
import About from "../components/about/About.js";
import Skills from "../components/skills/Skills.js";

function Main() {
  return (
    <div>
      <HashRouter>
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/skills" component={Skills} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default Main;
