import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Students from "./Students.jsx";
import List from "./list.jsx";
import UserGreeting from "./UserGreeting.jsx";
function App() {
   const fruits = [
      { id: 1, name: "Orange", calories: 40 },
      { id: 2, name: "Apple", calories: 50 },
      { id: 3, name: "Banana", calories: 100 },
      { id: 4, name: "Coconut", calories: 150 },
      { id: 5, name: "Pineapple", calories: 37 },
   ];
   const vegetables = [
      { id: 6, name: " Potato", calories: 110 },
      { id: 7, name: "Celery", calories: 15 },
      { id: 8, name: "Carrots", calories: 20 },
      { id: 9, name: "Corn", calories: 60 },
      { id: 10, name: "Brocolli", calories: 53 },
   ];

   //    return (
   //       <>
   //          {fruits.length > 0 ? <List items={fruits} Category="Fruits" /> : null}
   //          {vegetables.length > 0 ? (
   //             <List items={vegetables} Category="Vegetables" />
   //          ) : null}
   //       </>
   //    );

   // Or shortcircuit it as :

   return (
      <>
         {fruits.length > 0 && <List items={fruits} category="Fruit" />},
         {vegetables.length > 0 && (
            <List items={vegetables} category="Vegetables" />
         )}
      </>
   );
}
export default App;
