import { HashRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Stats from "./features/stats/Stats";
import Counter from "./features/counter/Counter";
import Buttons from "./features/buttons/Buttons";

export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/stats">Stats</Link>
        </li>
        <li>
          <NavLink activeClassName="active" to="/counter">
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/buttons">
            Buttons
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/buttons">
          <Buttons />
        </Route>
        <Route path="/">Main page (or 404 if no route matches)</Route>
      </Switch>
    </nav>
  </HashRouter>
);

// exact prop can be used to match the exact path
