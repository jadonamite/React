import React, { useContext } from "react";
import { userContext } from "./CompoA";

function CompoD() {
   const user = useContext(userContext);
   return (
      <>
         <div className="box">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
         </div>
      </>
   );
}
export default CompoD;
