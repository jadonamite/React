import React, { useState } from "react";

function MyComponent() {
   const [name, setName] = useState("");
   const [orderAmount, setOrderAmount] = useState("1");
   const [payment, setPaymentMethod] = useState("Visa");
   const [includeVat, setIncludeVat] = useState("");

   const handleChange = (e) => setName(e.target.value);
   const handleOrderChange = (e) => setOrderAmount(e.target.value);
   const handlePaymentChange = (e) => setPaymentMethod(e.target.value);
   const includeVatToggle = (e) => setIncludeVat(e.target.value);

   return (
      <div>
         <input type="text" value={name} onChange={handleChange} />
         <p>Alright noted I'll call you {name}</p>
         <input
            type="number"
            value={orderAmount}
            onChange={handleOrderChange}
         />
         <p>
            So {name} you are picking up {orderAmount} tickets
         </p>
         <p>How would you like to pay ? ..{payment}</p>
         <select
            name="payment"
            id=""
            value={payment}
            onChange={handlePaymentChange}>
            <option value="">Select an Option</option>
            <option value="Zelle">Zelle</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Paypal">Paypal</option>
         </select>
         <br />
         <br />
         <br />
         <label>
            Include VAT in payout
            <input
               type="radio"
               value="Yes"
               id=""
               checked={includeVat === "yes"}
               onChange={includeVatToggle}
            />
         </label>
         <br />
         <label>
            Add VAT to credit score
            <input
               type="radio"
               value="No"
               id=""
               checked={includeVat == "No"}
               onChange={includeVatToggle}
            />
         </label>
         <p> Include VAT in payout : {includeVat}</p>
      </div>
   );

   // the onChange event handler triggers a function
   // everytime the values of the input changes
}
export default MyComponent;
