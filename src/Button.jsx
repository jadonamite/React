function Button() {
   const handleClick = () => console.log("I'll change it for you");
   const handleClick2 = (name) =>
      console.log(`${name} I've warned you to stop clicking me`);

   return <button onClick={() => handleClick2("jadonamite")}>Click Me</button>;

   //    setTimeout(function () {
   //       console.log("Hello");
   //    }, 3000);
}

export default Button;
