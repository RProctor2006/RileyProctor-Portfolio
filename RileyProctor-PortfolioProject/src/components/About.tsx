//import React from 'react'

const About = () => {
    return (
        <section id="about" className="min-h-[750px] max-w-4xl mb-14 mx-auto px-6 ">
            <h2 className="sm:text-2xl md:text-4xl font-bold mb-8 dark:text-white">About Me</h2>
            <div className="p-4 text-left">
                <img
                    src="/images/Portrait.jpg"
                    alt="Project"
                    className="float-left w-64 h-auto md:mb-2 lg:mb-0 mr-6 rounded-lg shadow"
                />

                <p className="text-xl">
                    I've always been obsessed with games since a young age, playing games with my brother and dad shaped my childhood and ambitions.
                    We were always playing games I was definitely too young to be playing such as Mortal Kombat and Gears of War, regardless, I've 
                    always been curious as to how games are actually made.
                </p>
                
                <p className="text-xl md:mt-6 lg:mt-4">
                    Starting at the age of 13, me and a friend decided to just tinker about and try and see what we could do in Unreal Engine since we
                    had heard a lot about it.
                </p>
                
                <p className="text-xl mt-4">
                    From that point on, I've been infatuated with the games industry, self teaching myself for years until 
                    receiving formal teaching at the Confetti Institute of Creative Technologies college in Nottingham, on the Level 3 Games Technology  
                    Course. To now being in my 2nd year, studying Game Development at the University of Staffordshire in Stoke-On-Trent.
                </p>
                
                <p className="text-xl mt-4">
                    Over the years of self learning and formal teaching I have encountered many problems, issues and crashes, as well as becoming more inspired 
                    and dedicated to learn as much as I can about gameplay programming. Every time I got a new idea, 100 problems came with it, and solving those 
                    problems is the most satisfying feeling in the world. Whether it be having to re-plan a system, or just check one boolean, it's always a blast 
                    problem solving.
                </p>
                
                <p className="text-xl mt-4">
                    Programming has always been my interest in games development, the concept of being able to make anything happen just from writing some words 
                    seemed insane to me. I never could of imagined how far it went, learning what I've learnt at University. Such as the ability to manipulate 
                    specific bits with Bitwise Operations or the process of Data Locality for optimisation. I never would of thought about these things when 
                    playing a game normally.
                </p>

                <p className="text-xl mt-4">
                    I know for certain that the games industry is where I want to be, and having my name in the credits of a popular and beloved game 
                    is my dream. Being able to inspire another generation of game devs, as I was, is what I aim for.
                </p>
            </div>
        </section>
    );
};

export default About;