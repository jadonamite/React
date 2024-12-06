import React, { useState } from "react";

function Counter() {
   const [count, setCount] = useState(0);

   const incrementCount = () => {
      setCount(count + 1);
   };
   const decrementCount = () => {
      setCount(count - 1);
   };
   const resetCount = () => {
      setCount(0);
   };

   return (
      <div className="Counter-container">
         <h1 className="Header">The Counter</h1>
         <h1 className="figure">{count}</h1>
         <div className="btn-ctn">
            <button className="cnt-btn" onClick={incrementCount}>
               Increment
            </button>
            <button className="cnt-btn" onClick={resetCount}>
               Reset
            </button>
            <button className="cnt-btn" onClick={decrementCount}>
               Decrement
            </button>
         </div>
      </div>
   );
}
export default Counter;
