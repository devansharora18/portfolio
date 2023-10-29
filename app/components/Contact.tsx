import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Contact = () => {

	return (
		<section id="contact" className="min-h-[100vh] relative z-5 flex flex-col items-center justify-center">
		<div className="ct-form flex flex-col items-center">
		<p className="text-xl tracking-widest uppercase text-indigo-600">
			Contact
		</p>
		<h2 className="py-4 text-gray-100">
			Let's work together!
		</h2>
		<div className="contact">
			<form className="forms" action="https://formsubmit.co/dev.marvel.avengers@gmail.com" method="post" autoComplete="off">
				<label className="" htmlFor="name" >Your Name</label>
				<input type="text" name="name" className="input rounded-lg" placeholder="Your Name" required />

				<label className="" htmlFor="email">Email</label>
				<input type="email" className="input rounded-lg" name="email" placeholder="Email" required />

				<label className="" htmlFor="message">Message</label>
				<textarea name="message" className="rounded-lg" placeholder="Message" required />
				{/*</textarea required>*/}

				<input className="input rounded-lg bg-indigo-600" type="submit" value="Submit"/>

			</form>
			
		</div>
	</div>
	<div className="mt-4 flex justify-center items-center">
      <a
        href="https://github.com/ART3MISTICAL"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-100 hover:text-indigo-600 mr-4"
      >
        <FaGithub size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/devansh-arora-7b2395215/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-100 hover:text-indigo-600 mr-4"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href="mailto:mail@devansharora.tech"
		target="_blank"
        rel="noopener noreferrer"
        className="text-gray-100 hover:text-indigo-600"
      >
        <FaEnvelope size={32} />
      </a>
    </div>
	</section>
	)
}

export default Contact;
