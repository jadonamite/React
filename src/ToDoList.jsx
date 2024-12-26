import React, { useState } from "react";
import Arrowup from "./assets/Arrowup.png";
import Arrowdown from "./assets/Arrowdown.png";

function ToDoList() {
   const [tasks, setTasks] = useState(["Buy food", "Take  a bath"]);
   const [newTask, setNewTask] = useState([]);

   function handleInputChange(e) {
      setNewTask(e.target.value);
   }
   function addTask(e) {
      if (newTask !== "") {
         setTasks([...tasks, newTask]);
         setNewTask("");
      } else {
         !alert("You haven't added any task");
      }
   }
   function resetTask() {
      setTasks([]);
   }

   function deleteTask(index) {
      const updatedTask = tasks.filter((_, i) => i !== index);
      setTasks(updatedTask);
   }
   function moveUp(index) {
      if (index > 0) {
         const updatedTask = [...tasks];
         [updatedTask[index], updatedTask[index - 1]] = [
            updatedTask[index - 1],
            updatedTask[index],
         ];
         setTasks(updatedTask);
      }
   }
   // function moveDown(index) {
   //    if (index < tasks.length - 1) {
   //       const updatedTask = [...tasks];
   //       [updatedTask[index + 1], updatedTask[index]] = [
   //          updatedTask[index],
   //          updatedTask[index + 1],
   //       ];
   //       setTasks(updatedTask);
   //    }
   // }
   function moveDown(index) {
      if (index < tasks.length - 1) {
         const updatedTask = [...tasks];
         [updatedTask[index], updatedTask[index + 1]] = [
            updatedTask[index + 1],
            updatedTask[index],
         ];
         setTasks(updatedTask);
      }
   }

   return (
      <div className="to-do-list">
         <h1 className="header">Plan your Day</h1>
         <ol>
            {tasks.map((task, index) => (
               <li key={index} className="todo-list">
                  <span className="task">{task}</span>

                  <img
                     src={Arrowup}
                     alt=""
                     srcset=""
                     className="icon"
                     onClick={() => moveUp(index)}
                  />
                  <img
                     src={Arrowdown}
                     alt=""
                     srcset=""
                     className="icon"
                     onClick={() => moveDown(index)}
                  />
                  <button className="del-btn" onClick={() => deleteTask(index)}>
                     Delete
                  </button>
               </li>
            ))}
         </ol>
         <input
            type="text"
            value={newTask}
            placeholder="Enter a new task"
            onChange={handleInputChange}
         />
         <button className="add-btn" onClick={addTask}>
            Add
         </button>
         <button className="add-btn reset" onClick={resetTask}>
            Reset
         </button>
      </div>
   );
}

export default ToDoList;
