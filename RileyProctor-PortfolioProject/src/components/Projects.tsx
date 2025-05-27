//import React from 'react'9
import ProjectCarousel from './ProjectCarousel'

const myProjects = [
    {
        //Card Elements
        title: 'The First Hero',
        role: 'Solo Programmer',
        languagesUsed: 'Unreal Engine Blueprints',
        description: 'A souls-inspired dungeon crawler where you must progress through the dungeon to save your village!',
        image: `${import.meta.env.BASE_URL}/images/projects/TheFirstHeroImg.png`,
        
        //Project Details Elements
        overview: 'The First Hero is the final project I made for my first year of university.\n\nThe objective is to progress through the dungeon, fighting enemies and obtaining new weapons' +
            'in order to light all 3 spirit torches and progress to the next floor.\n\nThis project focuses on the combat and inventory systems which I am really proud of, you can read more' +
            'about these in the "Tech" section.\n\n\n\nMy main inspiration for this project was definitely Elden Ring and the Dark Souls series by FromSoftware.',
        overviewVideo: `https://www.youtube.com/embed/kphWFrlb76Q?autoplay=1&mute=1&loop=1&playlist=kphWFrlb76Q&modestbranding=1&rel=0&showinfo-0`,
        tech: [''],
        media: [''],
        challenges: '',
        
        projectLink: '',
    },
    {
        //Card Elements
        title: 'The First Hero',
        role: 'Solo Programmer',
        languagesUsed: 'Unreal Engine Blueprints',
        description: 'A souls-inspired dungeon crawler where you must progress through the dungeon to save your village!',
        image: `${import.meta.env.BASE_URL}/images/projects/TheFirstHeroImg.png`,

        //Project Details Elements
        overview: 'Test 2',
        overviewVideo: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&modestbranding=1&rel=0&showinfo-0',
        tech: [''],
        media: [''],
        challenges: '',

        projectLink: '',
    },
    {
        //Card Elements
        title: 'The First Hero',
        role: 'Solo Programmer',
        languagesUsed: 'Unreal Engine Blueprints',
        description: 'A souls-inspired dungeon crawler where you must progress through the dungeon to save your village!',
        image: `${import.meta.env.BASE_URL}/images/projects/TheFirstHeroImg.png`,

        //Project Details Elements
        overview: '',
        overviewVideo: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&modestbranding=1&rel=0&showinfo-0',
        tech: [''],
        media: [''],
        challenges: '',

        projectLink: '',
    },
    {
        //Card Elements
        title: 'The First Hero',
        role: 'Solo Programmer',
        languagesUsed: 'Unreal Engine Blueprints',
        description: 'A souls-inspired dungeon crawler where you must progress through the dungeon to save your village!',
        image: `${import.meta.env.BASE_URL}/images/projects/TheFirstHeroImg.png`,

        //Project Details Elements
        overview: '',
        overviewVideo: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&modestbranding=1&rel=0&showinfo-0',
        tech: [''],
        media: [''],
        challenges: '',

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