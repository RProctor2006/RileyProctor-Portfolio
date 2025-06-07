//import React from 'react'
import { Link, scrollSpy } from 'react-scroll'
import { useEffect } from 'react'

import ThemeSwitchButton from "./ThemeSwitchButton.tsx";



const Navbar = () => {

    //Updates the navbar link on start
    useEffect(() => {
        scrollSpy.update();
    }, []);
    
    return (
        <nav className="fixed top-0 left-0 right-0 bg-lightacc1/80 backdrop-blur-md shadow-md z-50 text-lighttext dark:bg-darklight/80 dark:text-white dark:shadow-xl/30">
            <div className="max-w-6xl mx-auto  py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Riley Proctor │ Gameplay Programmer</div>
                <ThemeSwitchButton />
                <ul className="flex flex-row gap-8 text-gray-700 font-medium text-xl dark:text-gray-300 dark:shadow-white">
                    <li><Link to="home" smooth={true} duration={500} spy={true} offset={-80} activeClass="font-semibold" className="hover:text-darklightsec cursor-pointer transition-colors duration-300">Home</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} spy={true} offset={-80} activeClass="font-semibold" className="hover:text-darklightsec cursor-pointer transition-colors duration-300">Projects</Link></li>
                    <li><Link to="about" smooth={true} duration={500} spy={true} offset={-80} activeClass="font-semibold" className="hover:text-darklightsec cursor-pointer transition-colors duration-300">About</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} spy={true} offset={-80} activeClass="font-semibold" className="hover:text-blue-600 cursor-pointer transition-colors duration-300">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;