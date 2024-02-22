import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setAllDone,
  toggleHideDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone,
  fetchExampleTasks,
} from "../TasksPage/tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(fetchExampleTasks())}>Get example tasks</button>
      <div className="section__buttons">
        {!areTasksEmpty && (
          <>
            <button
              onClick={() => dispatch(toggleHideDone())}
              className="button__hideCompleted"
            >
              {hideDone ? "Show" : "Hide"} completed
            </button>

            <button
              className="button__completeAll"
              disabled={isEveryTaskDone}
              onClick={() => dispatch(setAllDone())}
            >
              Complete all
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Buttons;

///////////////////////////////////////////// 1st version with if statement

// const Buttons = ({ tasks, hideDone }) => {
//     if (tasks.length === 0) {
//       return null;
//     }

//     return (
//       <div className="section__buttons">
//         <button className="button__hideCompleted">
//           {hideDone ? "Show" : "Hide"} completed
//         </button>

//         <button
//           className="button__completeAll"
//           disabled={tasks.every(({ done }) => done)}
//         >
//           Complete all
//         </button>
//       </div>
//     );
//   };

//   export default Buttons;
