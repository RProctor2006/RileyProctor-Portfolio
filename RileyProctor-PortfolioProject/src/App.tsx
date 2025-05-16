import Navbar from './components/Navbar';
import Hero from './components/Hero';
import React from 'react';

function App() {
    return (
        <div id="root" className="max-w-[1280px] mx-auto p-8 text-center">
            <Navbar />
            <main className="pt-20"> {/* padding top to offset fixed navbar height */}
                <Hero />
                <section id="projects" className="min-h-screen max-w-6xl mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold mb-8">Projects</h2>
                    {/* TODO: Add my projects grid here */}
                    <p className="text-gray-600">Coming Soon...</p>
                </section>
                <section id="about" className="min-h-screen max-w-4xl mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold mb-8">About Me</h2>
                    {/* TODO: Add my about content here */}
                    <p className="text-gray-700">I'm a passionate game developer with 6 years of programming experience...</p>
                </section>
                <section id="contact" className="bg-gray-900 text-white py-12 text-center">
                    <h2 className="text-3xl font-bold mb-6">Contact Me Here</h2>
                    {/* TODO: Add my contacts/social links here */}
                    <p>Email me at <a href="mailto:rileypgames06@gmail.com" className="underline hover:text-blue-400">rileypgames06@gmail.com</a></p>
                </section>
            </main>
        </div>
    );
}

export default App;
