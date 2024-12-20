import React, { useState } from "react";

function Pfp() {
   const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

   const handleAddFood = () => {
      const newFood = document.getElementById("foodInput").value;
      document.getElementById("foodInput").value = "";
      setFoods((f) => [...f, newFood]);
      // setFoods(foods.push(newFood));
   };
   const handleRemoveFood = (index) =>
      setFoods(foods.filter((_, i) => i !== index));
   // the function to be performed on the index i s explained as thus filter and return all elements where none of the elements returned has an index that is equal to the index selected (Hopefully this is understood)

   // N:B - The foods.filter(elements,index) - because the element properties is not being used we reduce it a "_" and to avoid naming conflicts between the elements key which is index and the index we translate index in the prop as i
   return (
      <div>
         <h2>List of Food</h2>
         <h4>Cart</h4>
         <ul>
            {foods.map((food, index) => (
               <li key={index} onClick={() => handleRemoveFood(index)}>
                  {food}
               </li>
               // So the onclick here says perform this function on this index that has been clicked
            ))}
         </ul>
         <input
            type="text"
            id="foodInput"
            placeholder="Enter the Food to add to your cart"
         />
         <button onClick={handleAddFood}> Add to Cart</button>
      </div>
   );
}

export default Pfp;
