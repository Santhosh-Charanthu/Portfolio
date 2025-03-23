import { useState } from "react";
import image from "./assets/connect4.webp";
import emailjs from "@emailjs/browser";
import "../styles/Form.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { div } from "framer-motion/client";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yl6gffr",
        "template_1otcfzq",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "6r2Jkg5Lr8P-2pquF"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="headContainer">
        <div className="heading">
          <p>Let's connect</p>
        </div>
      </div>
      <div className="letsConnect">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <i className="fas fa-user form-icon"></i> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope form-icon"></i> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email (e.g., name@example.com)"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment form-icon"></i> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className={`submit-btn ${isSubmitted ? "success" : ""}`}
            >
              <i className="fas fa-paper-plane button-icon"></i>{" "}
              {isSubmitted ? "Sent Successfully!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
