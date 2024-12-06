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
      <div>
         <h1>{count}</h1>
         <button onClick={incrementCount}>Increment</button>
         <button onClick={resetCount}>Reset</button>
         <button onClick={decrementCount}>Decrement</button>
      </div>
   );
}
export default Counter;
