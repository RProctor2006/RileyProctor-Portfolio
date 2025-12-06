
//Site Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import ThemeSwitchButton from "../components/ThemeSwitchButton.tsx";


function HomePage() {
    
    return (
        <div id="root" className="w-full h-full p-8 text-center bg-white text-black dark:bg-darkbg dark:text-white">
            <Navbar />

            {window.innerWidth > 768 ? (
                <div className="md:fixed right-0 bottom-0 p-3"> <ThemeSwitchButton/> </div>
            ) : (<div />)} 
            
            
            <main>
                <Hero />
                <Projects />
                <About />
                <Contact />
            </main>
        </div>
    );
}

export default HomePage;
