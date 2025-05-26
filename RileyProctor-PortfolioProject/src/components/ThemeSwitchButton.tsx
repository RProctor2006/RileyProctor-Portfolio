import { useEffect, useState } from "react";

const ToggleThemeButton = () => {

    const [isDark, setIsDark] = useState(true); //Default to dark
    
    
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);
    
    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="rounded-lg bg-blue-600 text-white hover:bg-blue-700 min-h-8 min-w-32"
        >
            {isDark ? "Light Mode" : "Dark Mode"}
        </button>
    )
}
export default ToggleThemeButton