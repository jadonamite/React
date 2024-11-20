function List(){

    const fruits = [
        {id: 1, name:"Orange", calories: 40},
        {id: 2,name:"Apple", calories: 50},        
        {id: 3,name:"Banana", calories: 100},
        {id: 4,name:"Coconut", calories: 150},
        {id: 5,name:"Pineapple", calories: 37}];


// lets talk about sorting the object array

// fruits.sort((a,b)=> a.name.localeCompare(b.name));// Will sort the list in Alphabetical Order
// fruits.sort((a,b)=> b.name.localeCompare(a.name));// Will sort the list in Reverse Alphabetical Order
// fruits.sort((a,b)=> a.calories-b.calories);// Will sort the list in Numerical Order
// fruits.sort((a,b)=> a.calories-b.calories);// Will sort the list in reverse Numerical Order
// fruits.sort((a,b)=> a.id-b.id);// Will sort the list in Numerical Order of the list id

// Lets talk about Filtering

// to Filter an array: lets say to filter the name array to only 
// names that are three words or less
const names = ["me","myself","I"];
const shortNames = names.filter(name => name.length <= 3)


    const listItems = fruits.map(fruit => <li key = {fruit.id}>
      <b>{fruit.name}</b>: <i>{fruit.calories} cal per serving</i>
        </li>)



    const listnames = shortNames.map( shortName=><li>{shortName}</li>)
    return(
        <>
        <ol>{listItems}</ol>
        <ul>{listnames}</ul>
    </>);
}
export default List 