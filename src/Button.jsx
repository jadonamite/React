import React, { useState } from "react";

function Button() {
   const [count, setCount] = useState(0);

   const handleClick = (name) => {
      if (count <= 3) {
         setCount(count + 1);
         console.log(`${name}, you have clicked me ${count + 1} times`);
      } else {
         console.log(`${name}, if you click me the ${count + 1}th time`);
         setCount(count + 1);
      }
   };

   return <button onClick={() => handleClick("jadonamite")}>Click Me</button>;
}

export default Button;
