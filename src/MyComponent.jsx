import React, { useState } from "react";

function MyComponent() {
   const [name, setName] = useState("Guest");

   const [age, setAge] = useState(0);

   const [isEmployed, setStatus] = useState(false);

   const updateName = () => {
      setName("Jadonamite");
   };

   const incrementAge = () => {
      setAge(age + 1);
   };
   const ToggleemploymentStatus = () => {
      setStatus(!isEmployed);
   };
   return (
      <div>
         <p>Name : {name} </p>
         <button className="component-button" onClick={updateName}>
            {" "}
            Add Name
         </button>
         <p>Age : {age} </p>
         <button className="component-button" onClick={incrementAge}>
            {" "}
            Set Age
         </button>
         <p>Employment Status : {isEmployed ? "Employed" : "Not Employed"} </p>
         <button className="component-button" onClick={ToggleemploymentStatus}>
            {" "}
            Toggle Status
         </button>
      </div>
   );
}
export default MyComponent;
