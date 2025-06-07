//import React from 'react'
import { FaGithub, FaLinkedin, FaItchIo, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-900 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl dark:bg-darkbgsec dark:shadow-darkbglight/50  dark:outline-darkbglight text-white py-19 max-w-225 mx-auto min-h-[89vh] text-center">
            <h2 className="text-5xl font-bold mb-10 dark:text-white">Contact Me</h2>

            {/* Social Icons */}
            <div className="flex justify-center gap-8 mb-10">
                <a href="https://github.com/RProctor2006" target="_blank" rel="noopener noreferrer" className="text-4xl dark:hover:text-darklight hover:text-lightacc1">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/riley-proctor" target="_blank" rel="noopener noreferrer" className="text-4xl dark:hover:text-darklight hover:text-lightacc1">
                    <FaLinkedin />
                </a>
                <a href="https://riley-proctor.itch.io" target="_blank" rel="noopener noreferrer" className="text-4xl dark:hover:text-darklight hover:text-lightacc1">
                    <FaItchIo />
                </a>
                <a href="mailto:rileypgames06@gmail.com" className="text-4xl dark:hover:text-darklight hover:text-lightacc1">
                    <FaEnvelope />
                </a>
            </div>

            {/* Contact Form */}
            <form action="mailto:rileypgames06@gmail.com" method="POST" encType="text/plain" className="max-w-md mx-auto space-y-4 text-left">

                <div className="w-full px-4 py-2 rounded bg-gray-800 dark:bg-darkbg border border-gray-700">
                    <input type="text" name="name" placeholder="Your Name" className="w-full text-white bg-transparent outline-none caret-auto select-text placeholder-gray-400"></input>
                </div>
                <div className="w-full px-4 py-2 rounded bg-gray-800 dark:bg-darkbg border border-gray-700">
                    <input type="email" name="email" placeholder="Your Email" className="w-full text-white bg-transparent outline-none caret-auto placeholder-gray-400"></input>
                </div>
                <div className="w-full px-4 py-2 rounded bg-gray-800 dark:bg-darkbg border border-gray-700 focus:outline-none focus:ring-blue-500 overflow-hidden">
                    <textarea name="message" placeholder="Your Message" rows={5} className="w-full text-white placeholder-gray-400 bg-transparent outline-none caret-auto"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-lightbutton hover:text-black dark:bg-darkbg hover:bg-blue-700 dark:hover:bg-darklightsec dark:hover:text-white transition-colors text-white font-semibold py-2 px-4 rounded">Send Message</button>
            </form>

            {/* Footer */}
            {/* Sign Off & Quote */}
            <div className="text-center mt-12 text-gray-500 ">
                <p className="mb-4  italic">Thanks for reaching out - I'm always ready for new challenges and collaborations.</p>
                <p className="text-sm text-gray-400">
                    <span className="italic">"Hesitation is defeat."</span> - Isshin, The Sword Saint
                </p>
            </div>

            {/* Now playing... */}
            <div className="mt-10 text-sm text-gray-400">
                <p className="italic">Currently playing: <span className="text-white font-medium">Elden Ring: Nightreign</span></p>
            </div>

            {/* Built with and year */}
            <footer className="mt-12 text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Riley Proctor</p>
                <p>Built with React, Vite, and Tailwind CSS</p>
            </footer>

        </section>
    );
};

export default Contact;