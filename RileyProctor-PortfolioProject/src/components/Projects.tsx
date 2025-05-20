//import React from 'react'9
import ProjectCarousel from './ProjectCarousel'

const myProjects = [
    {
        title: 'The First Hero',
        role: 'Solo Programmer',
        languagesUsed: 'Unreal Engine Blueprints',
        description: 'A souls-inspired dungeon crawler where you must progress through the dungeon to save your village!',
        image: `${import.meta.env.BASE_URL}/images/projects/TheFirstHeroImg.png`,
        projectLink: '',
    },
    {
        title: 'The First Hero',
        role: 'Solo Programmer',
        languagesUsed: 'Unreal Engine Blueprints',
        description: 'A souls-inspired dungeon crawler where you must progress through the dungeon to save your village!',
        image: `${import.meta.env.BASE_URL}/images/projects/TheFirstHeroImg.png`,
        projectLink: '',
    },
    {
        title: 'The First Hero',
        role: 'Solo Programmer',
        languagesUsed: 'Unreal Engine Blueprints',
        description: 'A souls-inspired dungeon crawler where you must progress through the dungeon to save your village!',
        image: `${import.meta.env.BASE_URL}/images/projects/TheFirstHeroImg.png`,
        projectLink: '',
    },
    {
        title: 'The First Hero',
        role: 'Solo Programmer',
        languagesUsed: 'Unreal Engine Blueprints',
        description: 'A souls-inspired dungeon crawler where you must progress through the dungeon to save your village!',
        image: `${import.meta.env.BASE_URL}/images/projects/TheFirstHeroImg.png`,
        projectLink: '',
    },
]

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            {/* Project Carousel */}
            <section id="projects-carousel" className="px-4 md:px-12">
                <ProjectCarousel projects={myProjects} />
            </section>
        </section>
    );
};

export default Projects;