import "./App.css";
import {routes} from './routes';
import {redirects} from './routes';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink exact className="list-items" activeClassName="xndzor" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact className="list-items" activeClassName="xndzor" to="/main/about">About</NavLink>
            </li>
            <li>
              <NavLink exact className="list-items" activeClassName="xndzor" to="/urishej">Urish Ej</NavLink>
            </li>
            <li>
              <NavLink exact className="list-items" activeClassName="xndzor" to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink exact className="list-items" activeClassName="xndzor" to="/forms">Forms</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          {routes.map((route,i)=>(
            <Route key={i} path={route.path} component={route.component} exact={route.isExact}/>          
          ))}

          {redirects.map((r,i)=>(
            <Redirect key={i} from={r.from} to={r.to} />          
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
