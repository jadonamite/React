import React, { useState, useEffect, useRef } from "react";

function MyComponent() {
   const [number, setNumber] = useState(0);

   useEffect(() => {
      setNumber((n) => n + 2);
      console.log(`Hi its been clicked ${number} times`);
   }, []);

   const handleOnClick = () => {
      setNumber((n) => n + 1);
      console.log("Clicked");
   };

   return (
      <>
         <button className="add-btn" onClick={handleOnClick}>
            Click Me
         </button>
         <h1 className="number">{number}</h1>
      </>
   );
}
export default MyComponent;
