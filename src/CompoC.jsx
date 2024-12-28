import React, { useContext } from "react";
import CompoD from "./CompoD";
import { userContext } from "./CompoA";
import { ageContext } from "./CompoB";

function CompoC() {
   const user = useContext(userContext);

   const age = useContext(ageContext);
   return (
      <>
         <div className="box">
            <h1>Component C</h1>
            <h2>{`Thank you ${user} your age is ${age}`}</h2>
            <CompoD />
         </div>
      </>
   );
}
export default CompoC;
