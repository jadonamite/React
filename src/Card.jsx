import React, { useState } from "react";
function Card() {
   const [Car, setCar] = useState({
      year: 2022,
      make: "Audi",
      model: "Zamfir",
   });

   const handleYearChange = (e) =>
      setCar((c) => ({ ...c, year: e.target.value }));
   const handleMakeChange = (e) =>
      setCar((c) => ({ ...c, make: e.target.value }));
   const handleModelChange = (e) =>
      setCar((c) => ({ ...c, model: e.target.value }));
   return (
      <div>
         <p>
            Your Selected race car : {Car.year} {Car.make} {Car.model}
         </p>
         <input type="number" value={Car.year} onChange={handleYearChange} />
         <input type="text" value={Car.make} onChange={handleMakeChange} />
         <input type="text" value={Car.model} onChange={handleModelChange} />
      </div>
   );
}

export default Card;
