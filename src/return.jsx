import React, { useState, useEffect } from "react";

function Dimension() {
   const [width, setWidth] = useState(window.innerWidth);
   const [height, setHeight] = useState(window.innerHeight);
   const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
   };
   useEffect(handleResize(), [width, height]);
   return (
      <>
         <p className="window-prop">Window Width : {width}</p>
         <p className="window-prop">Window Height : {height}</p>
         <button className="add-btn" onClick={handleResize}>
            Update Dimension
         </button>
      </>
   );
}

export default Dimension;
