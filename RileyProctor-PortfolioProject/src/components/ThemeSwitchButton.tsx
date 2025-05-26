import {useEffect, useState} from "react";
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
            className="px-3 py-1 border rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
        >
            {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
        

};

export default ToggleThemeButton