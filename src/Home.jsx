import React, { useState, useEffect, useRef } from "react";

export default function Home() {
   const To = "src/assets/Arrow.png";
   const location = ["LAG", "ABJ", "ONI", "POR "];
   const [destination, setDestination] = useState(location[0]);
   const [tripHistory, setTripHistory] = useState([]);
   const [nextDestination, setNextDestination] = useState(location[1]);
   const [prevDestination, setPrevDestination] = useState(
      location[location.length - 1]
   );
   const [timer, setTimer] = useState(30);
   const [selectedMode, setSelectedMode] = useState(
      "./src/assets/default2.jpeg"
   );
   const Ref1 = useRef(null);
   const Ref2 = useRef(null);
   const Ref3 = useRef(null);

   const [ticketsSold, setTicketsSold] = useState(0);
   const [totalTicketsSold, setTotalTicketsSold] = useState(ticketsSold);
   const addTrip = (Destination, Mode, TotalTicketsSold) => {
      const Time = new Date().toLocaleTimeString(); // Generate a new timestamp
      const newTrip = { Time, Destination, Mode, TotalTicketsSold };
      setTripHistory((prev) => {
         const updatedHistory = [...prev, newTrip];
         return updatedHistory.slice(-2); // Keep only the last two trips
      });
   };

   function setToRoad() {
      setSelectedMode("./src/assets/bus.jpeg");
      Ref2.current.style.backgroundColor = "";
      Ref1.current.style.backgroundColor = "#4433e0b4";
      Ref3.current.style.backgroundColor = "";
   }
   function setToAir() {
      setSelectedMode("./src/assets/plane.jpeg");
      Ref2.current.style.backgroundColor = "#4433e0b4";
      Ref1.current.style.backgroundColor = "";
      Ref3.current.style.backgroundColor = "";
   }
   function setToRail() {
      setSelectedMode("./src/assets/train.jpeg");
      Ref2.current.style.backgroundColor = "";
      Ref1.current.style.backgroundColor = "";
      Ref3.current.style.backgroundColor = "#4433e0b4";
   }
   const Increment = () => setTicketsSold((t) => t + 1);

   const Decrement = () => setTicketsSold((t) => Math.max(0, t - 1));

   useEffect(() => {
      const intervalId = setInterval(() => {
         setTimer((t) => {
            if (t == 0) {
               const currentIndex = location.indexOf(destination);
               const nextIndex = (currentIndex + 1) % location.length;

               // Capture all required data before updating states
               const currentTimestamp = new Date().toLocaleTimeString();
               const currentTicketsSold = ticketsSold;
               const currentMode = selectedMode;
               const currentDestination = destination;

               addTrip(currentDestination, currentMode, currentTicketsSold);

               setPrevDestination(destination);
               setDestination(location[nextIndex]);
               setNextDestination(location[(nextIndex + 1) % location.length]);
               setTicketsSold(0);
               setTotalTicketsSold(currentTicketsSold); // Sync total tickets
               // setTimeStamp(currentTimestamp);
               return 30;
            }
            return t - 1;
         });
      }, 1000);
      return () => {
         clearInterval(intervalId);
      };
   }, [destination, ticketsSold, tripHistory]);
   function formatTime() {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;

      return `${catenateZero(minutes)}:${catenateZero(seconds)}`;
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
         <div className="mainContainer">
            <div className="container Left">
               <div className="locationJar Jar">
                  <div className="destination">
                     <p className="currentTrip">{prevDestination}</p>
                     <p className="info">Previous Trip</p>
                  </div>
                  <img src={To} alt="From - To" className="To" />
                  <div className="destination">
                     <p className="currentTrip">{destination}</p>
                     <p className="info">Current Trip</p>
                  </div>
               </div>
               <div className="modesCon">
                  <p className="ModesTitle Title">Selected Transport modes</p>
                  <div className="modes">
                     <div className="mode" onClick={setToRoad} ref={Ref1}>
                        <p className="modeText">Road</p>
                     </div>
                     <div className="mode" onClick={setToAir} ref={Ref2}>
                        <p className="modeText">Air</p>
                     </div>
                     <div className="mode" onClick={setToRail} ref={Ref3}>
                        <p className="modeText">Rail</p>
                     </div>
                  </div>
               </div>
               <div className="nextTrip">
                  <p className="tripTitle Title">Upcoming trip</p>
                  <div className="nextTo">
                     <img
                        src={selectedMode}
                        alt="Selected mode of transport"
                        className="mode-img"
                     />
                     <p className="nextto">
                        En route to {nextDestination} from Unicron's Corp
                     </p>
                  </div>
               </div>
            </div>
            <div className="container Risrc/assets/Arrowup.pngght">
               <div className="counterJar Jar">
                  <p className="title Title">Number of Tickets Sold</p>
                  <div className="counter">
                     <p className="crement" onClick={Decrement}>
                        -
                     </p>
                     <div className="ticketContainer">
                        <p className="tickets">{ticketsSold}</p>
                     </div>
                     <p className="crement" onClick={Increment}>
                        +
                     </p>
                  </div>
               </div>
               <div className="timerJar Jar">
                  <p className="timerTitle Title">Trip Timer</p>

                  <p className="timer">{formatTime()}</p>
               </div>
            </div>
         </div>

         <div className="foot">
            <p className="Title">Trip History</p>
            <div className="insideFooter">
               <div className="historyDialog">
                  <div className="historyHeader">
                     <p className="historyheader B">Time</p>
                     <p className="historyheader B">Mode</p>
                     <p className="historyheader B">Total Passengers</p>
                     <p className="historyheader B">Destination</p>
                  </div>
                  {tripHistory.length > 0 ? (
                     tripHistory.map((trip, index) => (
                        <div className="historyHeader" key={index}>
                           <p className="historyheader">{trip.Time}</p>
                           <p className="historyheader">
                              {trip.Mode.includes("plane")
                                 ? "Air"
                                 : trip.Mode.includes("bus")
                                 ? "Road"
                                 : trip.Mode.includes("train")
                                 ? "Rail"
                                 : "Not Specified"}
                           </p>
                           <p className="historyheader">
                              {trip.TotalTicketsSold}
                           </p>
                           <p className="historyheader">{trip.Destination}</p>
                        </div>
                     ))
                  ) : (
                     <>
                        <div className="historyHeader">
                           <p className="historyheader">No trips available</p>
                        </div>
                     </>
                  )}
               </div>
            </div>
         </div>
      </>
   );
}
