//import React from 'react'
import { FaGithub, FaLinkedin, FaItchIo, FaEnvelope } from 'react-icons/fa'
import emailjs from 'emailjs-com'

function Contact() {
    
    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        emailjs.sendForm(
            "service_2n1wiei",
            "template_a5pme4r",
            e.currentTarget,
            "n-sL4rI6Hi-b-OrTz"
        )
            .then(() => alert("Message Sent!"))
            .catch(() => alert("Failed to Send Message"));
    }
    
    return (
        <section id="contact" className="w-full flex justify-center pt-19 md:max-w-225 mx-auto h-fit text-center">
            <div id="contact" className="sm:min-w-[45vh] bg-gray-900 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl dark:bg-darkbgsec dark:shadow-darkbglight/50  dark:outline-darkbglight text-white">
                <h2 className="sm:mt-4 sm:text-3xl md:text-5xl font-bold mb-10 dark:text-white">Contact Me</h2>

                {/* Social Icons */}
                <div className="flex justify-center gap-8 mb-10 sm:text-3xl md:text-4xl">
                    <a href="https://github.com/RProctor2006" target="_blank" rel="noopener noreferrer" className="dark:hover:text-darklight hover:text-lightacc1">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/riley-proctor-12b695254" target="_blank" rel="noopener noreferrer" className="dark:hover:text-darklight hover:text-lightacc1">
                        <FaLinkedin />
                    </a>
                    <a href="https://riley-proctor.itch.io" target="_blank" rel="noopener noreferrer" className="dark:hover:text-darklight hover:text-lightacc1">
                        <FaItchIo />
                    </a>
                    <a href="mailto:rileypgames06@gmail.com" className="dark:hover:text-darklight hover:text-lightacc1">
                        <FaEnvelope />
                    </a>
                </div>

                {/* Contact Form */}
                <form onSubmit={sendEmail} className="max-w-md mx-auto space-y-4 text-left ">

                    <div className="sm:w-[40vh] mx-auto md:w-full px-4 py-2 rounded bg-gray-800 dark:bg-darkbg border border-gray-700">
                        <input name="from_name" placeholder="Your Name" className="w-full text-white bg-transparent outline-none caret-auto select-text placeholder-gray-400"></input>
                    </div>
                    <div className="sm:w-[40vh] mx-auto md:w-full px-4 py-2 rounded bg-gray-800 dark:bg-darkbg border border-gray-700">
                        <input name="from_email" placeholder="Your Email" className="w-full text-white bg-transparent outline-none caret-auto placeholder-gray-400"></input>
                    </div>
                    <div className="sm:w-[40vh] mx-auto md:w-full px-4 py-2 rounded bg-gray-800 dark:bg-darkbg border border-gray-700 focus:outline-none focus:ring-blue-500 overflow-hidden">
                        <textarea name="message" placeholder="Your Message" rows={5} className="w-full text-white placeholder-gray-400 bg-transparent outline-none caret-auto"></textarea>
                    </div>
                    <button type="submit" className="block sm:w-[40vh] mx-auto md:w-full bg-blue-600 hover:bg-lightbutton hover:text-black dark:bg-darkbg hover:bg-blue-700 dark:hover:bg-darklightsec dark:hover:text-white transition-colors text-white font-semibold py-2 px-4 rounded">
                        Send Message
                    </button>
                </form>

                {/* Footer */}
                {/* Sign Off & Quote */}
                <div className="text-center mt-12 text-gray-500 ">
                    <p className="mb-4 px-2 italic">Thanks for reaching out - I'm always ready for new challenges and collaborations.</p>
                    <p className="text-sm text-gray-400 px-2">
                        <span className="italic">"Hesitation is defeat."</span> - Isshin, The Sword Saint
                    </p>
                </div>

                {/* Now playing... */}
                <div className="mt-10 text-sm text-gray-400">
                    <p className="italic">Currently playing: <span className="text-white font-medium">Battlefield 6</span></p>
                </div>

                {/* Built with and year */}
                <footer className="mt-12 pb-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Riley Proctor</p>
                    <p>Built with React, Vite, and Tailwind CSS</p>
                </footer>
            </div>
        </section>
        
    );
};

export default Contact;