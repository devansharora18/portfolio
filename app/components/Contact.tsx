import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="min-h-[100vh] relative z-5 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="ct-form flex flex-col items-center"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-xl tracking-widest uppercase text-indigo-600 font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.p>
        <motion.h2 
          className="py-4 text-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Let's work together!
        </motion.h2>
        <motion.div 
          className="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <form className="forms" action="https://formsubmit.co/dev.marvel.avengers@gmail.com" method="post" autoComplete="off">
            <motion.label 
              className="" 
              htmlFor="name"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Your Name
            </motion.label>
            <motion.input 
              type="text" 
              name="name" 
              className="input rounded-lg" 
              placeholder="Your Name" 
              required
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            />

            <motion.label 
              className="" 
              htmlFor="email"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Email
            </motion.label>
            <motion.input 
              type="email" 
              className="input rounded-lg" 
              name="email" 
              placeholder="Email" 
              required
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            />

            <motion.label 
              className="" 
              htmlFor="message"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
            >
              Message
            </motion.label>
            <motion.textarea 
              name="message" 
              className="rounded-lg" 
              placeholder="Message" 
              required
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
            />

            <motion.input 
              className="rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 mt-4 w-full" 
              type="submit" 
              value="Submit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </form>
        </motion.div>
      </motion.div>
      <motion.div 
        className="mt-4 flex justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="https://github.com/devansharora18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-indigo-600 mr-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub size={32} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/devansh-arora-7b2395215/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-indigo-600 mr-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin size={32} />
        </motion.a>
        <motion.a
          href="mailto:mail@devansharora.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-indigo-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaEnvelope size={32} />
        </motion.a>
      </motion.div>
    </motion.section>
  )
}

export default Contact;
