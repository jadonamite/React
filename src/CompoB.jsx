import React, { useContext, useState, createContext, useEffect } from "react";
import CompoC from "./CompoC";
import { userContext } from "./CompoA";
export const ageContext = createContext();

function CompoB() {
   const [age, setAge] = useState(0);
   const user = useContext(userContext);
   const currentYear = new Date().getFullYear();

   const handleAge = () => {
      setAge(currentYear - 2003);
   };

   useEffect(handleAge, [currentYear]);

   return (
      <>
         <div className="box">
            <h2>{`Alright ${user} you're welcome to Component B`}</h2>

            <ageContext.Provider value={age}>
               <CompoC />
            </ageContext.Provider>
         </div>
      </>
   );
}
export default CompoB;
