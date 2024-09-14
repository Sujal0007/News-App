import { useState } from "react";
import Searchbar from "./Searchbar";

export default function Header(){
  // const [darkMode , setDarkMode] = useState(false);

  // const toggleTheme = ()=>{
  //   setDarkMode(!darkMode);
  //   document.body.classList.toggle("dark-theme");
  // }

  return(
    <header className="header">
      <div >
      <div className="icons"><i class="fa-solid fa-bars"></i>
      {/* <i class="fa-solid fa-magnifying-glass"></i> */}
      <Searchbar/>
      {/* <Searchbar/> */}
      </div>
     
      
      </div>
     <div className="logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/330px-BBC_Logo_2021.svg.png" alt="" />
     </div>
      <div>
      <button className="register">Register</button>
      <button className="signin">Sign In</button>
      </div>
    </header>
  )
}


