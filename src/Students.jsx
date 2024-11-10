function Students (props){
   const styles ={
    fontFamily:"Arial, Helvetica, sans-serif",
    fontSize:"1.4em",
    // border: "1px solid #9f9d9dcc",
    marginLeft: "20px",
   }
   
   
    return(
        <div style={styles}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student : {props.isStudent ? "Yes":"No"}</p>
        </div>
    );
}

export default Students