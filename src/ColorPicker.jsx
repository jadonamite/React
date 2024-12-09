import React, { useState } from "react";

function ColorPicker() {
   const [color, setColor] = useState("#FFFFFF");
   const setColorChange = (e) => setColor(e.target.value);
   return (
      <div className="color-picker-container">
         <h1 className="color-picker-header">Color Picker</h1>
         <div className="color-display" style={{ backgroundColor: color }}>
            <p className="sel-color">Selected Color {color}</p>
         </div>

         <label>Select a color</label>
         <br />
         <input type="color" value={color} onChange={setColorChange} />
      </div>
   );
}
export default ColorPicker;
