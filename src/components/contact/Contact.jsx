import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_EMAIL_POST_URL;

const Contact = () => {
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("🙏Please fill in all fields!");
      return;
    }

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
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
      setStatus((prev) => ({ ...prev, success: false, error: true }));
    } finally {
      setStatus((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-5xl mx-auto z-10 relative">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <h5 className="text-emerald-400 font-medium tracking-wider uppercase text-sm mb-2">Get In Touch</h5>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500">Contact Me</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            <div className="flex flex-col gap-6 w-full md:w-1/3">
                <motion.article 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col items-center p-8 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 hover:bg-zinc-800/60 transition-all duration-300 shadow-xl group text-center"
                >
                    <MdOutlineEmail className="text-3xl text-emerald-400 mb-4 group-hover:-translate-y-1 transition-transform" />
                    <h4 className="text-zinc-100 font-semibold mb-2">Email</h4>
                    <h5 className="text-zinc-400 text-sm mb-6 break-all">pawarakusaramport@gmail.com</h5>
                    <a href="mailto:pawarakusaramport@gmail.com" target="_blank" rel="noreferrer" className="text-emerald-400 text-sm hover:text-emerald-300 font-medium">
                        Send a message
                    </a>
                </motion.article>

                <motion.article 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-center p-8 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 hover:bg-zinc-800/60 transition-all duration-300 shadow-xl group text-center"
                >
                    <BsWhatsapp className="text-3xl text-emerald-400 mb-4 group-hover:-translate-y-1 transition-transform" />
                    <h4 className="text-zinc-100 font-semibold mb-2">WhatsApp</h4>
                    <h5 className="text-zinc-400 text-sm mb-6 whitespace-nowrap">+91 9623993506</h5>
                    <a href="https://api.whatsapp.com/send?phone+919623993506" target="_blank" rel="noreferrer" className="text-emerald-400 text-sm hover:text-emerald-300 font-medium">
                        Send a message
                    </a>
                </motion.article>
            </div>

            <motion.form 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onSubmit={handleSubmit} 
                className="flex flex-col gap-6 w-full md:w-2/3"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    className="w-full p-4 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                    className="w-full p-4 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
                <textarea
                    name="message"
                    rows="7"
                    placeholder="Your Message"
                    required
                    className="w-full p-4 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                ></textarea>
                
                <button
                    type="submit"
                    disabled={status.loading}
                    className="w-fit px-8 py-4 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 disabled:bg-zinc-600 disabled:text-zinc-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                    {status.loading ? "Sending..." : status.success ? "Sent ✓" : "Send Message"}
                </button>

                {status.error && (
                    <p className="text-red-400 text-sm mt-2">
                        ❌ An error occurred. Please try again later.
                    </p>
                )}
            </motion.form>
        </div>
    </section>
  );
};

export default Contact;
