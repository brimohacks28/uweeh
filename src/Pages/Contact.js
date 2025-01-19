// import React from "react";
// import "../Styles/Contact.css";

// const Contact = () => {
//   return (
//     <div className="contact-page">
//       <header className="contact-header">
//         <h1>Get in Touch</h1>
//         <p>We'd love to hear from you! Reach out with any questions or feedback.</p>
//       </header>
      
//       <section className="contact-methods">
//         <div className="contact-card">
//           <h2 style={{ color: '#333' }}>Email Us</h2>
//           <p>For inquiries, collaborations, or feedback, feel free to drop us an email!</p>
//           <a href="mailto:brianmaema28@gmail.com" className="contact-link">
//             Shoot us a mail
//           </a>
//         </div>
        
//         <div className="contact-card">
//           <h2 style={{ color: '#333' }}>WhatsApp Us</h2>
//           <p>Prefer messaging? Reach us directly on WhatsApp!</p>
//           <a  style={{ background: ' #25D366' }}
//             href="https://wa.me/254793715684" 
//             className="contact-link"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Chat with us
//           </a>
//         </div>
//       </section>
      
//       <footer className="contact-footer">
//         <p>Thank you for reaching out! We'll get back to you as soon as possible.</p>
//       </footer>
//     </div>
//   );
// };

// export default Contact;


// import React from "react";
// import "../Styles/Contact.css";

// const Contact = () => {
//   return (
//     <div className="contact-page">
//       <header className="contact-header">
//         <h1>Get in Touch</h1>
//         <p>We'd love to hear from you! Reach out with any questions or feedback.</p>
//       </header>
      
//       <section className="contact-methods">
//         <div className="contact-card">
//           <h2>Email Us</h2>
//           <p>For inquiries, collaborations, or feedback, feel free to drop us an email!</p>
//           <a href="mailto:brianmaema28@gmail.com" className="contact-link email-link">
//             Shoot us a mail
//           </a>
//         </div>
        
//         <div className="contact-card">
//           <h2>WhatsApp Us</h2>
//           <p>Prefer messaging? Reach us directly on WhatsApp!</p>
//           <a href="https://wa.me/254793715684" className="contact-link whatsapp-link" target="_blank" rel="noopener noreferrer">
//             Chat with us
//           </a>
//         </div>
//       </section>
      
//       <footer className="contact-footer">
//         <p>Thank you for reaching out! We'll get back to you as soon as possible.</p>
//       </footer>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import "../Styles/Contact.css";


const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <div className="contact-us-content">
                <div className="contact-us-text">
                    <h1 className="contact-title">Get in Touch</h1>
                    <p className="contact-description">
                        Have questions or need assistance? We're here to help! Drop us a message or reach out directly.
                    </p>
                    <form
                        className="contact-form"
                        action="mailto:example@example.com"
                        method="post"
                        encType="text/plain"
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="contact-us-image">
                    <img src="https://media.istockphoto.com/id/469969306/photo/golden-yellow-contact-us-button-on-a-computer-grey-keyboard.webp?a=1&b=1&s=612x612&w=0&k=20&c=h9bOs6wSVb2vvvinyP48Flpeh8hm4HrT2pm04lTuhlM=" alt="Contact Us" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
