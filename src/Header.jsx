import { useState } from "react";

export default function Header(){
  const [darkMode , setDarkMode] = useState(false);

  const toggleTheme = ()=>{
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme");
  }

  return(
    <header className="header">
      <div className="logo">
        <img src="https://th.bing.com/th/id/OIP.xjV7WtT7xbLh8DJAeEe-fwHaHa?rs=1&pid=ImgDetMain" alt="" />

      </div>
      <nav className="nav-links">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Contact</a>
        <a href="">Login</a>
        <a href="">More</a>

      </nav>
      <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? "Dark" : "Light"} <i className="fa-regular fa-sun"></i>
      </button>
    </header>
  )
}


