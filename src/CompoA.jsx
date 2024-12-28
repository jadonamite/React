import React, { createContext, useState } from "react";
import CompoB from "./CompoB.jsx";
export const userContext = createContext();
function CompoA() {
   const [user, setUser] = useState("Jadonamite");

   return (
      <>
         <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>

            <userContext.Provider value={user}>
               <CompoB />
            </userContext.Provider>
         </div>
      </>
   );
}
export default CompoA;
