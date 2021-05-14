import "./App.css";
import Users from "./components/Users";
import DaysAndHours from "./components/DaysAndHours";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink className="list-items" exact activeClassName="xndzor" to="/main">Home</NavLink>
            </li>
            <li>
              <NavLink  className="list-items" exact activeClassName="xndzor" to="/main/about">About</NavLink>
            </li>
            <li>
              <NavLink  className="list-items" exact activeClassName="xndzor" to="/urishej">Urish Ej</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/main" component={Home}></Route>
          <Route path="/main/about" component={About}></Route>
          <Route path="/urishej" component={DaysAndHours}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
