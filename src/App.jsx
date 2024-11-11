import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Students from "./Students.jsx"
import UserGreeting from "./UserGreeting.jsx";
function App() {
    return (
        <>
         <UserGreeting isLoggedIn = {false} username = "Jadonamite" />
        <h1>Hello World </h1>
        <Card/>
        <Students name="Unique" age ={30} isStudent = {true} />
        <Card/>
        <Students name="Omstena" age={22} isStudent = {false}/>
        <Students/>
        <Button/>
       
        
        </>
    );
   
}
export default App
