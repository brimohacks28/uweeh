import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Facebook and Instagram icons
import { SiX } from 'react-icons/si'; // Import the SiX icon for X
import '../Styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-dark text-light pt-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
            We're here to share insights, inspire creativity, and connect with readers like you. Whether you're looking for lifestyle tips, travel stories, or the latest in tech, our content is crafted with you in mind.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/signup" className="text-light">sign up</a></li>
              <li><a href="/Login" className="text-light">login</a></li>
              <li><a href="/maincontent" className="text-light">blog</a></li>
              
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:info@example.com" className="text-light">	isaacmacha24@gmail.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-light">+(254) 720 823434 | +(254) 720 823434</a></p>
            <h5> Your Guide to Life’s Alphabet of Ideas </h5>
      <ul className="list-inline">
        <li className="list-inline-item">
            {/* <a 
             href="https://facebook.com" 
             target="_blank" 
             rel="noopener noreferrer" 
             aria-label="Facebook"
            >
            <FaFacebook size={24} style={{ color: '#1877F2' }} />
            </a> */}
         </li>
              <li className="list-inline-item">
                {/* <a href="https://x.com" className="text-light" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
                  <SiX size={24} />
                </a> */}
              </li>
              <li className="list-inline-item">
              {/* <a 
  href="https://www.instagram.com/lilylovebridal?igsh=MWs5Z2Y1OTZ1c2ZyNw==" 
  className="text-light" 
  target="_blank" 
  rel="noopener noreferrer" 
  aria-label="Instagram" 
  style={{
    display: 'inline-block', // Make the anchor behave like a block for background
    background: 'linear-gradient(90deg, #F58529, #F77737, #FBCF4A, #D62976, #C13584, #E1306C)',
    padding: '3px', 
    borderRadius: '6px' // Rounded corners
  }}
>
  <FaInstagram size={24} style={{ color: '#FFFFFF' }} /> 
</a> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center py-3">
          <p className="mb-0">Catch22 ©  {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;