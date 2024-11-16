import Card from "./Card.jsx"
import Button from "./Button.jsx"
// import Students from "./Students.jsx"
import Students from "./Content.jsx"
import List from "./list.jsx"
import UserGreeting from "./UserGreeting.jsx";
function App() {
    return (
        <>
         <UserGreeting isLoggedIn = {false} username = "Jadonamite" />
        <h1>Dont Forget to like and retweet</h1>
        <Card/>
        <Students/>
        {/* <Students name="Unique" age ={30} isStudent = {true} />
        <Card/>
        <Students name="Omstena" age={22} isStudent = {false}/>
        <Students/>
        <Button/>
        <List/> */}
       
        
        </>
    );
   
}
export default App
