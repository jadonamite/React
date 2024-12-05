import React, { useState } from "react";

function Button() {
   // const [count, setCount] = useState(0);

   // const handleClick = (name) => {
   //    if (count <= 3) {
   //       setCount(count + 1);
   //       console.log(`${name}, you have clicked me ${count + 1} times`);
   //    } else {
   //       console.log(`${name}, if you click me the ${count + 1}th time`);
   //       setCount(count + 1);
   //    }
   // };

   // return <button onClick={() => handleClick("jadonamite")}>Click Me</button>;

   // Now lets not be more generic and lets work with the events

   const handleClickAgain = (e) => (e.target.textContent = "Hey Stop it");

   return (
      <button onClick={(event) => handleClickAgain(event)}>Click Me</button>
   );
}

// the e stands for event (that is the event hanndler ) which can be written in short as e

// I can also use instead of an onclick a onDoubleClick for double clicking events as the snippet below

// return (
//    <button onDoubleClick={(event) => handleClickAgain(event)}>Click Me</button>
// );

// Then on double click it will perform the desired  action

export default Button;
