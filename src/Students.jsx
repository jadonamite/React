import PropTypes from "prop-types"
import { Component } from "react";

// props = read-only properties that are shared between components.
// A parent component can send data to a child component.
// EG : <component key = value/>
// EG : <Students name = "hulloma"/>

function Students (
    {
        name="Guest",
        age=0,
        isStudent=false
    }
){
   const styles ={
    fontFamily:"Arial, Helvetica, sans-serif",
    fontSize:"1.4em",
    // border: "1px solid #9f9d9dcc",
    marginLeft: "20px",
   }
   
//   propTypes = A mechanism that ensures that the passed value is of correct data typeof.
//   EG: age: PropTypes.number
   
    return(
        <div style={styles}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student : {isStudent ? "Yes":"No"}</p>
        </div>
    );
}


Students.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}

// DefaultProps = Default values for props in cases where they are noyt passed down from the parents Component
// EG : name: "Guest"

// But they are pretty outdated now

// Students.defaultProps = {
//     name:"Guest",
//     age:0,
//     isStudent:false
// }
export default Students