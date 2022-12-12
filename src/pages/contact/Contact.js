import React, { useState } from "react";
import "./Contact.scss";
import Card from "../components/card/Card";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import Loader from "../components/loader/Loader";
import { sendEmailContact } from "../../services/emailService";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await sendEmailContact(data);
      setSubject("");
      setMessage("");
      setIsLoading(false);
      toast.success(response.message);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };
  return (
    <div className="contact">
      {isLoading && <Loader />}
      <h3 className="--mt">Contact Us</h3>
      <div className="section">
        <form onSubmit={sendEmail}>
          <Card cardClass="card">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              placeholder="Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="--btn --btn-primary">Send Message</button>
          </Card>
        </form>
        <div className="details">
          <Card cardClass={"card2"}>
            <h3>Our Contact Information</h3>
            <p>Fill the form or contact us via other channels listed below</p>
            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p>+1 (973) 356 4598</p>
              </span>
              <span>
                <FaEnvelope />
                <p>support@pinvent.com</p>
              </span>
              <span>
                <GoLocation />
                <p>Florida, USA</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
