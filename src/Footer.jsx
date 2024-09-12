import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/330px-BBC_Logo_2021.svg.png" alt="News Logo" />
        </div>

        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </nav>

       
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" >
          <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" >
          <i class="fa-brands fa-square-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" >
          <i class="fa-brands fa-instagram"></i>
          </a>
        </div>

        
        <p className="footer-copyright">
          &copy; 2024 News Website. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
