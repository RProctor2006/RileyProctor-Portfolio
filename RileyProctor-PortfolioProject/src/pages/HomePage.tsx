
//Site Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import ThemeSwitchButton from "../components/ThemeSwitchButton.tsx";


function HomePage() {
    
    return (
        <div id="root" className="w-full h-full mx-auto p-8 text-center bg-white text-black dark:bg-darkbg dark:text-white">
            <Navbar />
            <div className="fixed right-0 bottom-0 p-3"> <ThemeSwitchButton/> </div>
            
            <main className="">
                <Hero />
                <Projects />
                <About />
                <Contact />
            </main>
        </div>
    );
}

export default HomePage;
