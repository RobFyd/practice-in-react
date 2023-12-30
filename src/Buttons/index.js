import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="section__buttons">
    {tasks.length > 0 && (
      <>
        <button className="button__hideCompleted">
          {hideDoneTasks ? "Show" : "Hide"} completed
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

// const Buttons = ({ tasks, hideDoneTasks }) => {
//     if (tasks.length === 0) {
//       return null;
//     }

//     return (
//       <div className="section__buttons">
//         <button className="button__hideCompleted">
//           {hideDoneTasks ? "Show" : "Hide"} completed
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
