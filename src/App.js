import {
  HashRouter,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import Stats from "./features/stats/Stats";
import Counter from "./features/counter/Counter";
import Buttons from "./features/buttons/Buttons";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";

export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/tasks">
            Tasks
          </NavLink>
        </li>
        <li>
          <Link to="/stats">Stats</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/buttons">Buttons</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/tasks/:id">
          <TaskPage />
        </Route>
        <Route path="/tasks">
          <TasksPage />
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
        <Route path="/1">
          <Redirect to="/tasks" />
        </Route>
        <Route path="/">Main page (or 404 if no route matches)</Route>
      </Switch>
    </nav>
  </HashRouter>
);

// exact prop can be used to match the exact path
// <Redirect> component can be used to redirect to another route
