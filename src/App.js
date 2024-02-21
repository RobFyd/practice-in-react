import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";

export const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/tasks">
          <Tasks />
        </Route>
      </Switch>
    </nav>
  </BrowserRouter>
);
