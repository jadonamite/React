import { useEffect, useState } from "react";
import styles from "./digitalClock.module.css";

function DigitalClock() {
   const [time, setTime] = useState(new Date());

   useEffect(() => {
      const IntervalId = setInterval(() => {
         setTime(new Date());
      }, 1000);
      return () => {
         clearInterval(IntervalId);
      };
   }, []);

   function formatTime() {
      let hour = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const meridiem = hour < 12 ? "AM" : "PM";
      hour = hour % 12 || 12;
      return `${catenateZero(hour)}:${catenateZero(minutes)}:${catenateZero(
         seconds
      )}:${meridiem}`;
   }

   function catenateZero(number) {
      let n;
      if (number < 10) {
         n = "0" + number;
         return n;
      }
      n = "" + number;
      return n;
   }

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
