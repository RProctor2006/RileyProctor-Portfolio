import { FaBars } from "react-icons/fa";
import { useState } from 'react';

type MenuProps = {
    list: React.ReactNode;
}

const BurgerMenu = ({list}:MenuProps) => {

    const [isPressed, setIsPressed] = useState(false);
    
    return (
        <div>
            <button
                onClick={() => setIsPressed(!isPressed)}
            >
                <FaBars className="w-15 h-15"/>
            </button>

            {isPressed && (
                <div className="h-fit py-1 px-3 absolute mt-2 mx-auto bg-white dark:bg-gray-900 shadow-lg z-50 text-black dark:text-white">
                    {list}
                </div>
            )}
        </div>

    )

}

export default BurgerMenu