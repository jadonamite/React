// To style the button there are different ways this could be done 
// 1. External
// 2. Module
// 3. Inline
function Button(){
const styles = {
        display: "block",
        backgroundColor:" aquamarine",
        color: "rgb(62, 41, 6)",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
       }
    return(
        <button style={styles}>
            Click Me   m 
            
        </button>

    );
}




export default Button