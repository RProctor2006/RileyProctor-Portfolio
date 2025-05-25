
const ToggleThemeButton = () => {

    let buttonText = document.documentElement.classList.contains("dark") ? "light" : "dark";
    
    const UpdateButtonText = () => {
        buttonText = document.documentElement.classList.contains("dark") ? "light" : "dark";
    }
    

    const ThemeSwitch = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            UpdateButtonText();
            return;
        }
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        UpdateButtonText();
    }
    
    return (
        <button
            onClick={ThemeSwitch}
            className="rounded-lg bg-blue-600 text-white hover:bg-blue-700 min-h-8 min-w-64"
        >
            {buttonText}
        </button>
    )
}
export default ToggleThemeButton