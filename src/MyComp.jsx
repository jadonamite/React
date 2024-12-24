import React, { useState } from "react";

function MyComp() {
   const [cars, setCars] = useState([]);
   const [carYear, setCarYear] = useState(new Date().getFullYear());
   // N:B - The code in the car years useState is used to return the current year from the react API
   const [carMake, setCarMake] = useState("");
   const [carModel, setCarModel] = useState("");

   const handleAddCar = () => {
      const newCar = { year: carYear, make: carMake, model: carModel };
      setCars((c) => [...c, newCar]);
      setCarYear(new Date().getFullYear());
      setCarMake("");
      setCarModel("");
   };
   const handleRemoveCar = (index) =>
      setCars((c) => c.filter((_, i) => i !== index));
   const handleCarYear = (event) => setCarYear(event.target.value);
   const handleCarMake = (event) => setCarMake(event.target.value);
   const handleCarModel = (event) => setCarModel(event.target.value);

   return (
      <div className="react-container">
         <h2>Select Your Race Car </h2>

         <ul>
            {cars.map((car, index) => (
               <li key={index} onClick={() => handleRemoveCar(index)}>
                  {car.year} {car.make} {car.model}
               </li>
            ))}
         </ul>
         <input type="number" value={carYear} onChange={handleCarYear} />
         <br />
         <input
            type="text"
            value={carMake}
            onChange={handleCarMake}
            placeholder="Enter the car make"
         />
         <br />
         <input
            type="text"
            value={carModel}
            onChange={handleCarModel}
            placeholder="Enter the car model"
         />
         <button className="btn" onClick={handleAddCar}>
            Add car
         </button>
      </div>
   );
}
export default MyComp;
