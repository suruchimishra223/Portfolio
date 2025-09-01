import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../App.css"; // Yaha apni CSS file use kijiye

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jfpjlbi",  // Replace with your EmailJS Service ID
        "template_r6faqxb", // Replace with your EmailJS Template ID
        form.current,
        "15zMpcxCpS-uEzxma" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="contact-header">
        <h2>CONTACT</h2>
        <div className="divider"></div>
        <p>I’d love to hear from you—reach out for any opportunities or questions!</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h3>Connect With Me 🚀</h3>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="email" name="user_email" placeholder="Your Email" required />
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" rows="4" required></textarea>

          <button type="submit" disabled={isSent}>
            {isSent ? "Sent ✅" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
