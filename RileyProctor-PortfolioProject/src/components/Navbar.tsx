import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center">
                <div className="text-2xl font-bold">Riley Proctor</div>
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
                    <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
                    <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
                    <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;