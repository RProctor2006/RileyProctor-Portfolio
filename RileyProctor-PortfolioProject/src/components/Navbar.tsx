//import React from 'react'
import { Link, scrollSpy } from 'react-scroll'
import { useEffect } from 'react'

import BurgerMenu from "./BurgerMenu.tsx";



const Navbar = () => {

    //Updates the navbar link on start
    useEffect(() => {
        scrollSpy.update();
    }, []);

    return (
        <nav
            className="fixed sm:w-dvw sm:text-sm sm:pr-6 sm:pl-2 top-0 left-0 right-0 bg-lightacc1/80 backdrop-blur-md shadow-md z-50 text-lighttext dark:bg-darklight/80 dark:text-white dark:shadow-xl/30">
            <div className="max-w-6xl mx-auto py-4 flex flex-row items-center justify-between sm:gap-6 md:gap-8">
                <div className="sm:text-lg md:text-2xl font-bold">Riley Proctor │ Gameplay Programmer</div>
                
                {/*If device viewport is larger than phone size, then display headings in navbar*/}
                {window.innerWidth > 768 ? (
                    <ul className="sm:text-sm flex flex-row gap-8 text-gray-700 font-medium md:text-xl dark:text-gray-300 dark:shadow-white">
                        <li><Link to="home" smooth={true} duration={500} spy={true} offset={-80}
                                  activeClass="font-semibold"
                                  className="hover:text-darklightsec cursor-pointer transition-colors duration-300">Home</Link>
                        </li>
                        <li><Link to="projects" smooth={true} duration={500} spy={true} offset={-80}
                                  activeClass="font-semibold"
                                  className="hover:text-darklightsec cursor-pointer transition-colors duration-300">Projects</Link>
                        </li>
                        <li><Link to="about" smooth={true} duration={500} spy={true} offset={-80}
                                  activeClass="font-semibold"
                                  className="hover:text-darklightsec cursor-pointer transition-colors duration-300">About</Link>
                        </li>
                        <li><Link to="contact" smooth={true} duration={500} spy={true} offset={-80}
                                  activeClass="font-semibold"
                                  className="hover:text-blue-600 cursor-pointer transition-colors duration-300">Contact</Link>
                        </li>
                    </ul>
                ) : (
                    <BurgerMenu />
                )}

            </div>
        </nav>
    );
};

export default Navbar;