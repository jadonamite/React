import React, { useState, useEffect } from "react";

function Dimension() {
   const [width, setWidth] = useState(window.innerWidth);
   const [height, setHeight] = useState(window.innerHeight);
   const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
   };
   useEffect(() => {
      window.addEventListener("resize", handleResize);
      console.log("Event Listener Added");

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);
   useEffect(() => {
      document.title = `The Width is ${width} while the Height is ${height}`;
   }, [width, height]);
   return (
      <>
         <p className="window-prop">Window Width : {width}</p>
         <p className="window-prop">Window Height : {height}</p>
         <button className="add-btn" onClick={handleResize}>
            Update Dimension
         </button>
      </>
   );
}

export default Dimension;

// N:B : USE EFFECTS AND ITS EXPRESSIONS
// A REACT HOOK THAT TELLS JAVASCRIPT TO DO SOME TASK AT DIFFERENT EXPRESSIONS

// useEffect(function, [dependency])

// EXPRESSIONS
// 1. useEffect((function)) => RUNS AFTER EVERY RERENDER
// 2. useEffect((function), []) => RUNS ONLY ON MOUNT
// 3. useEffect((function), [value]) =>RUNS ON MOUNT + @ VALUE CHANGE
