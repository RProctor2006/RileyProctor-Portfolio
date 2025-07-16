import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-scroll'

const BurgerMenu = () => {

    const [isPressed, setIsPressed] = useState(false);
    
    return (
        <div className="flex flex-col items-center">
            <button
                onClick={() => setIsPressed(!isPressed)}
            >
                <FaBars className="w-11 h-11"/>
            </button>

            {isPressed && (
                <div
                    className="h-fit py-1 px-3 absolute mt-12 bg-white dark:bg-gray-900 shadow-lg z-50 text-black dark:text-white">
                    <ul className="sm:text-sm flex flex-col gap-4 text-gray-700 font-medium md:text-xl dark:text-gray-300 dark:shadow-white">
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
                </div>
            )}
        </div>

    )

}

export default BurgerMenu