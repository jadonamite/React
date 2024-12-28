import { useEffect, useState } from "react";
import styles from "./digitalClock.module.css";

function DigitalClock() {
   const [time, setTime] = useState(new Date());

   return (
      <>
         <div className={styles.clockContainer}>
            <div className={styles.clock}>
               <span className="time">{formatTime()}</span>
            </div>
         </div>
      </>
   );
}

export default DigitalClock;
