import React, { useEffect, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_EMAIL_POST_URL;

const Contact = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
      }
    });

    observer.observe(document.querySelector("#contact"));

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  // onSubmit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    // return;

    // validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("🙏Please fill in all fields!");
      return;
    }
    // set loading
    setStatus((prev) => ({
      ...prev,
      loading: true,
      success: false,
      error: false,
    }));

    try {
      const response = await axios.post(`${BASE_URL}/send-email`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response: ", response);

      alert("Message sent successfully!");
      form.reset();
      setStatus((prev) => ({ ...prev, success: true, error: false }));
      // reset loading
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
      // alert showing error
      setStatus((prev) => ({ ...prev, success: false, error: true }));
    } finally {
      setStatus((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, translateY: 250 }}
      animate={hasAnimated ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.6 }}
      id="contact"
    >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="contact__h5">pawarakusaramport@gmail.com</h5>

            <a href="mailto:pawarakusaramport@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone+919623993506"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status.loading}
          >
            {status.loading
              ? "Sending..."
              : status.success
              ? "Sent ✓"
              : "Send Message"}
          </button>

          {status.error && (
            <p className="error-text">
              ❌ An error occurred. Please try again later.
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
