import React from 'react';
import "../app/styles/contact.css"; // Custom CSS import

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="header">
          <h1 className="heading"><b>Get In Touch</b></h1>
          <p className="subheading">I’d love to hear from you! Feel free to reach out through any of the following options.</p>
        </div>

        <div className="contact-options">
          <div className="contact-item">
            <div className="icon">📞</div>
            <h2 className="text">+923153487432</h2>
          </div>

          <div className="contact-item">
            <div className="icon">💬</div>
            <h2 className="text">WhatsApp: +923156723459</h2>
          </div>

          <div className="contact-item">
            <div className="icon">✉️</div>
            <h2 className="text">Email: abcd123@gmail.com</h2>
          </div>

          <div className="contact-item">
            <div className="icon text-blue-600">🔵</div>
            <a href="https://facebook.com" target="_blank" className="text">Facebook: Mahad Khan</a>
          </div>
        </div>

        <div className="message-form">
          <h2 className="form-heading">Or Leave a Message</h2>
          <form className="form">
            <div>
              <label className="label">Full Name</label>
              <input type="text" name="name" placeholder="Your Full Name" className="input" />
            </div>

            <div>
              <label className="label">Email Address</label>
              <input type="email" name="email" placeholder="Your Email Address" className="input" />
            </div>

            <div>
              <label className="label">Message</label>
              <textarea name="message" placeholder="Write your message here..." className="textarea"></textarea>
            </div>

            <button className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
