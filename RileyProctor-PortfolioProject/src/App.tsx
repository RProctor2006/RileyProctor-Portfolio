
//Site Components
import Navbar from './components/Navbar';
import ThemeSwitchButton from "./components/ThemeSwitchButton.tsx";

//Import Pages
import HomePage from './pages/HomePage.tsx'
import TheFirstHeroPage from "./pages/TheFirstHeroPage.tsx";

//import essentials
import { Routes, Route } from 'react-router-dom';

function App() {
    
    return (
        <div id="root" className="w-full h-full mx-auto p-8 text-center bg-white text-black dark:bg-darkbg dark:text-white">
            <Navbar />
            <div className="fixed right-0 bottom-0 p-3"> <ThemeSwitchButton/> </div>

            {/*Page Routes*/}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/TheFirstHero" element={<TheFirstHeroPage />} />
            </Routes>
        </div>
    );
}

export default App;
