import React, { useState, useEffect } from "react";

function MyComponent() {
   const [count, setCount] = useState(0);
   const [color, setColor] = useState("red");
   useEffect(() => {
      document.title = `Count: ${count} at ${color} color`;
   }, [count][color]);
   const Increment = () => setCount((c) => c + 1);
   const Decrement = () => setCount((c) => c - 1);
   const changeColor = () => setColor((c) => (c === "red" ? "green" : "red"));
   return (
      <div>
         <p style={{ color }}>Count : {count}</p>
         <button onClick={Increment} className="add-btn">
            Increment
         </button>
         <button onClick={Decrement} className="add-btn">
            Decrement
         </button>
         <button onClick={changeColor} className="add-btn">
            Toggle Color
         </button>
      </div>
   );
}
export default MyComponent;
