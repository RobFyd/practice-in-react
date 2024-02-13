import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleHideDone } from "../Tasks/tasksSlice";

const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();
  return (
    <div className="section__buttons">
      {tasks.length > 0 && (
        <>
          <button onClick={() => dispatch(toggleHideDone())} className="button__hideCompleted">
            {hideDone ? "Show" : "Hide"} completed
          </button>

          <button
            className="button__completeAll"
            disabled={tasks.every(({ done }) => done)}
            onClick={setAllDone}
          >
            Complete all
          </button>
        </>
      )}
    </div>
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
