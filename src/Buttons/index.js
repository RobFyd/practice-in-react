import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
  <div className="section__buttons">
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="button__hideCompleted">
          {hideDone ? "Show" : "Hide"} completed
        </button>

        <button
          className="button__completeAll"
          disabled={tasks.every(({ done }) => done)}
        >
          Complete all
        </button>
      </>
    )}
  </div>
);

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
