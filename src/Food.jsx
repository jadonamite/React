function Food(){
    const food1 = 'Yam';
    const food2 = 'Rice';
    return(
        <ul>
            <li>Beans</li>
            <li>{food1}</li>
            <li>{food1.toLowerCase()}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food