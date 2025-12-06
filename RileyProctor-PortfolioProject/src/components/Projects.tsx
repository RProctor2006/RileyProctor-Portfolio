//import React from 'react'9
import ProjectCarousel from './ProjectCarousel'

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
        <section id="projects" className=" max-w-6xl mx-auto px-6 pt-12 pb-20 min-w-325">
            <h2 className="text-4xl font-bold mb-8 dark:text-white">Projects</h2>
            {/* Project Carousel */}
            {window.innerWidth > 768 ? (
                <section id="projects-carousel" className="px-4 md:px-12">
                    <ProjectCarousel projects={myProjects} />
                </section>
            ): (
                <h2 className = "text-4xl font-bold mb-8 dark:text-white">Coming Soon!</h2>
            ) }
            
        </section>
    );
};

export default Projects;