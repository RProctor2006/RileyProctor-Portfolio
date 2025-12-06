//import React from 'react'9
import ProjectCarousel from './ProjectCarousel'
import {Link} from "react-router-dom";

const myProjects = [
    {
        //Card Elements
        title: 'The First Hero',
        role: 'Solo Programmer',
        languagesUsed: 'Unreal Engine Blueprints',
        description: 'A souls-inspired dungeon crawler where you must progress through the dungeon to save your village!',
        image: `/images/projects/TheFirstHeroImg.png`,
        pageLink: '/TheFirstHero#home',
        
        projectLink: 'https://github.com/RProctor2006/GamesFund-Project',
    },
    {
        //Card Elements
        title: 'Pixel Brawl',
        role: 'Solo Programmer',
        languagesUsed: 'Unity C#',
        description: 'Fight through unique enemies on a deadly island arena! Can you survive and triumph over these foes?',
        image: `/images/projects/PixelBrawl_Thumbnail.png`,
        pageLink: '',
        

        projectLink: '',
    },
    {
        //Card Elements
        title: 'Pokémon Battle Simulation',
        role: 'Solo Programmer',
        languagesUsed: 'Raw C++',
        description: "A recreation of Pokémon's complex combat system! Includes all the extra effects in battle. Programmed efficiently and cleanly.",
        image: `/images/projects/PokemonBattle_Thumbnail.png`,
        pageLink: '',

        projectLink: '',
    },
    {
        //Card Elements
        title: 'Project Clockwork',
        role: 'Project Lead & Lead Programmer',
        languagesUsed: 'TBD',
        description: 'An oppressive government terrorises the nation and destroys communities. This unique action-adventure game with an innovative combat system is in early planning, demo predicted for summer 2026!',
        image: `/images/projects/ProjectClockwork.png`,
        pageLink: '',

        projectLink: '',
    },
]

const Projects = () => {
    return (
        <section id="projects" className="flex w-full justify-center max-w-6xl mx-auto px-6 pt-12 pb-20 lg:min-w-3/4 xl:min-w-3/5">
            <div className="sm:min-w-[45vh] mx-auto">
                <h2 className="sm:text-2xl md:text-4xl font-bold mb-8 dark:text-white">Projects</h2>

                {/* Project Carousel */}
                <section id="projects-carousel" className="hidden md:block px-4 md:px-12">
                    <ProjectCarousel projects={myProjects} />
                </section>

                <section className="grid grid-cols-2 gap-4 md:hidden">
                    {myProjects.map((project, i) => (
                        <div key={i} className="bg-white dark:bg-darkbgsec p-3 rounded-lg shadow-md">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full aspect-square object-cover rounded-md"
                            />
                            <h3 className="text-md mt-2 font-semibold dark:text-white">
                                {project.title}
                            </h3>
                            <div className="flex flex-col">
                                <Link to={project.pageLink}>
                                    <button
                                        className="text-xs my-auto px-4 py-2 mt-2 bg-darkbg font-bold cursor-pointer text-white rounded-lg hover:bg-lightbutton dark:hover:bg-darklightsec hover:text-black transition-colors duration-200"
                                    >
                                        View Project Page
                                    </button>
                                </Link>

                                <Link to={project.projectLink}>
                                    <button
                                        className="text-xs my-auto px-4 py-2 mt-4 bg-darkbg font-bold cursor-pointer text-white rounded-lg hover:bg-lightbutton dark:hover:bg-darklightsec hover:text-black transition-colors duration-200"
                                    >
                                        Project Repository
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    );
};

export default Projects;