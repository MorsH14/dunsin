import React, { useState } from "react";
import axios from "axios";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      await axios.post(
        "http://localhost:5000/submit",
        formData
      );
      setStatusMessage("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatusMessage("Error sending message. Please try again later.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="">
      <div className="myContactContainer">
        <div className="contactMainContainer">
          <div className="imgContentContainer">
            {/* Optional image or content here */}
          </div>
          <div className="contactContent">
          <div className=" mar-20">
          <h1>Get in Touch</h1>
          </div>

            <form className="contactInput" onSubmit={handleSubmit}>
              <div className="">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="textinput"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="textinput"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="">
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="textareainput"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              {statusMessage && <p>{statusMessage}</p>}
              <div className="">
                <input
                  type="submit"
                  value={isSubmitting ? "Submitting..." : "Submit"}
                  className="submitBtn"
                  disabled={isSubmitting}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
