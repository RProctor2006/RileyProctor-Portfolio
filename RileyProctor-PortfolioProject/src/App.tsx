
//Site Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

//import React from 'react';

function App() {
    
    return (
        <div id="root" className="min-w-screen mx-auto p-8 text-center bg-white text-black dark:bg-darkbg dark:text-white">
            <Navbar />
            <main className="">
                <Hero />
                <Projects />
                <About />
                <Contact />
            </main>
        </div>
    );
}

export default App;
