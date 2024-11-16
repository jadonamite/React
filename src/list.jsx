function List(){
    const fruits = [
        {name:"Orange", calories: 40},
        {name:"Apple", calories: 50},        
        {name:"Banana", calories: 100},{name:"Coconut", calories: 150},{name:"Pineapple", calories: 37}];
    const listItems = fruits.map(fruit => <li key = {fruit.name}>{fruit.name}</li>)
     
    return(
        <ol>{listItems}</ol>
    );
}
export default List 