import profilePics from "./assets/thebalddev.jpg"
function Card() {
    return(
        <div className="card">
            <img src={profilePics} alt="" srcSet="" className="cardImage"/>
            <h2 className="cardTitle">Jadonamite</h2>
            <p className="cardText">Newbie developer funny bro </p>
        </div>
    );
}

export default Card