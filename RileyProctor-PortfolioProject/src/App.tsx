
//Site Components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage.tsx'

import ThemeSwitchButton from "./components/ThemeSwitchButton.tsx";
import TheFirstHeroPage from "./pages/TheFirstHeroPage.tsx";

//import React from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
    
    return (
        <div id="root" className="w-full h-full mx-auto p-8 text-center bg-white text-black dark:bg-darkbg dark:text-white">
            <Navbar />
            <div className="fixed right-0 bottom-0 p-3"> <ThemeSwitchButton/> </div>

            {/*Routes*/}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/TheFirstHero" element={<TheFirstHeroPage />} />
            </Routes>
        </div>
    );
}

export default App;
