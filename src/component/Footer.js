import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
      Bora's
          <a rel="noreferrer" aria-label="Bora Linkedin" href="https://www.linkedin.com/in/bora-kim-364715180/" target="_blank" class="btn contact-details">
              <i className="fa fa-linkedin"></i>
          </a>
      
      Serin's 
        <a  rel="noreferrer" aria-label="Serin Linkedin"href="https://www.linkedin.com/in/serin-jeon/" target="_blank" class="btn contact-details">
          <i className="fa fa-linkedin"></i>
        </a>
        &copy; 2020. Serin Jeon / Bora Kim - all rights reserved
      </div>
    </footer>
  );
};

export default Footer;