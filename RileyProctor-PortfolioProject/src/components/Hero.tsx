import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 text-white">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Hi, I'm Riley!</h1>
            <p className="text-xl md:text-2xl max-w-xl mb-8">Game Developer & Programmer | creating immersive experiences & engaging gameplay</p>
            <a href="#projects" className="bg_blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">See My Work</a>
        </section>
    );
};

export default Hero;