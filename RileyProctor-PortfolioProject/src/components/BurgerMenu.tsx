import { FaBars } from "react-icons/fa";
import {useEffect, useState} from 'react';
import {Link as ScrollLink, scrollSpy} from 'react-scroll'
import { Link as RouterLink, useLocation} from 'react-router-dom';


const BurgerMenu = () => {

    const [isPressed, setIsPressed] = useState(false);

    const location = useLocation(); //Current location of the user
    const onHome = location.pathname === '/';

    //Updates the navbar link on start
    useEffect(() => {
        scrollSpy.update();
    }, []);
    
    return (
        <div className="flex md:hidden flex-col items-center">
            <button
                onClick={() => setIsPressed(!isPressed)}
            >
                <FaBars className="w-11 h-11"/>
            </button>

            {isPressed && (
                <div
                    className="h-fit py-2 px-3 mr-5 absolute mt-16 bg-white dark:bg-gray-900 shadow-lg z-50 text-black dark:text-white">
                    <ul className="sm:text-sm flex flex-col gap-4 text-gray-700 font-medium md:text-xl dark:text-gray-300 dark:shadow-white">
                        <li>
                            {onHome ? (
                                <ScrollLink to="home" smooth={true} duration={500} spy={true} offset={-80}
                                            activeClass="font-semibold"
                                            className="hover:text-blue-600 cursor-pointer transition-colors duration-300"
                                            onClick={() => setIsPressed(false)}>
                                    Home
                                </ScrollLink>
                            ) : (
                                <RouterLink to="/#home" onClick={() => setIsPressed(false)}>
                                    Home
                                </RouterLink>
                            )}
                        </li>
                        <li>
                            {onHome ? (
                                <ScrollLink to="projects" smooth={true} duration={500} spy={true} offset={-80}
                                            activeClass="font-semibold"
                                            className="hover:text-blue-600 cursor-pointer transition-colors duration-300"
                                            onClick={() => setIsPressed(false)}>
                                    Projects
                                </ScrollLink>
                            ) : (
                                <RouterLink to = "/#projects" onClick={() => setIsPressed(false)}>
                                    Projects
                                </RouterLink>
                            )}
                        </li>
                        <li>
                            {onHome ? (
                                <ScrollLink to="about" smooth={true} duration={500} spy={true} offset={-80}
                                            activeClass="font-semibold"
                                            className="hover:text-blue-600 cursor-pointer transition-colors duration-300"
                                            onClick={() => setIsPressed(false)}>
                                    About
                                </ScrollLink>
                            ) : (
                                <RouterLink to="/#about" onClick={() => setIsPressed(false)}>
                                    About
                                </RouterLink>
                            )}
                        </li>
                        <li>
                            {onHome ? (
                                <ScrollLink to="contact" smooth={true} duration={500} spy={true} offset={-80}
                                            activeClass="font-semibold"
                                            className="hover:text-blue-600 cursor-pointer transition-colors duration-300"
                                            onClick={() => setIsPressed(false)}>
                                    Contact
                                </ScrollLink>
                            ) : (
                                <RouterLink to="/#contact" onClick={() => setIsPressed(false)}>
                                    Contact
                                </RouterLink>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </div>

    )

}

export default BurgerMenu