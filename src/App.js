import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Stats from "./features/stats/Stats";

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
      </ul>
      <Switch>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
