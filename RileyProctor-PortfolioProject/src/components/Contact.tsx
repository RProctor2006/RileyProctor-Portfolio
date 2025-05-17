import React from 'react'
import { FaGithub, FaLinkedin, FaItchIo, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-900 text-white py-18 min-h-[90vh] text-center">
            <h2 className="text-5xl font-bold mb-10">Contact Me</h2>

            {/* Social Icons */}
            <div className="flex justify-center gap-8 mb-10">
                <a href="https://github.com/RProctor2006" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-blue-400">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/riley-proctor" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-blue-400">
                    <FaLinkedin />
                </a>
                <a href="https://riley-proctor.itch.io" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-blue-400">
                    <FaItchIo />
                </a>
                <a href="mailto:rileypgames06@gmail.com" className="text-4xl hover:text-blue-400">
                    <FaEnvelope />
                </a>
            </div>

            {/* Contact Form */}
            <form action="mailto:rileypgames06@gmail.com" method="POST" encType="text/plain" className="max-w-md mx-auto space-y-4 text-left">

                <div className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700">
                    <input type="text" name="name" placeholder="Your Name" className="w-full text-white bg-transparent outline-none caret-auto select-text placeholder-gray-400"></input>
                </div>
                <div className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700">
                    <input type="email" name="email" placeholder="Your Email" className="w-full text-white bg-transparent outline-none caret-auto placeholder-gray-400"></input>
                </div>
                <div className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-blue-500 overflow-hidden">
                    <textarea name="message" placeholder="Your Message" rows={5} className="w-full text-white placeholder-gray-400 bg-transparent outline-none caret-auto"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded">Send Message</button>
            </form>

            {/* Footer */}
            <div className="text-center mt-12 text-gray-500">
                <p className="mb-4 italic">Thanks for reaching out - I'm always ready for new challenges and collaborations.</p>
                <p className="text-sm text-gray-400">
                    <span className="italic">"Hesitation is defeat."</span> - Isshin, The Sword Saint
                </p>
            </div>
        </section>
    );
};

export default Contact;