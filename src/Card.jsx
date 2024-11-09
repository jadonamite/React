import profilePics from "./assets/hammerdisc.jpeg"
function Card() {
    return(
        <div className="card">
            <img src={profilePics} alt="" srcset="" className="cardImage"/>
            <h2 className="cardTitle">Jadonamite</h2>
            <p className="cardText">Newbie developer funny bro </p>
        </div>
    );
}

export default Card