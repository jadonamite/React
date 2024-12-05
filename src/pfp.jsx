function Pfp() {
   const imageUrl = "./src/assets/thebalddev.jpg";

   const handleClick = (e) => (e.target.style.display = "none");

   return <img onClick={(e) => handleClick(e)} src={imageUrl}></img>;
}
export default Pfp;
