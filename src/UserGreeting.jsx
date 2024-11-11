import PropTypes from "prop-types";
function UserGreeting(props){
    
        if(props.isLoggedIn){
            return(
                <h2>Welcome {props.username}</h2>
            );
        }
        else{
            return <h2> Please Login to Continue</h2>
        }
// You can also use Generic statements:
//         this could also suffice

        // return(props.isLoggedIn ? <h2>Welcome {props.username}</h2>: <h2>Please Log in to Continue </h2>);

    
}


export default UserGreeting