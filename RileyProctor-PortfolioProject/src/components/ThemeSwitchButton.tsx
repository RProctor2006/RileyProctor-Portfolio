import { useEffect, useState } from 'react';

const ToggleThemeButton = () => {

    const [isDark, setIsDark] = useState(true); // Default to dark
    
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="px-3 py-1 border sm:w-20 sm:text-xs md:w-30 md:h-11 md:text-base rounded-lg bg-darkbg text-white dark:bg-gray-300 dark:text-black cursor-pointer hover:bg-darklightsec dark:hover:text-white dark:hover:border-black"
        >
            {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
        

        
};

export default ToggleThemeButton