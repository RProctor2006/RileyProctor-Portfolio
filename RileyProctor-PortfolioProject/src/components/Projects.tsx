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
        
        //Project Details Elements
        overview: 'The First Hero is the final project I made for my first year of university.\n\nThe objective is to progress through the dungeon, fighting enemies and obtaining new weapons ' +
            'in order to light all 3 spirit torches and progress to the next floor.\n\nThis project focuses on the combat and inventory systems which I am really proud of, you can read more ' +
            'about these in the "Mechanics" section.\n\n\n\nMy main inspiration for this project was definitely Elden Ring and the Dark Souls series by FromSoftware, I wanted to practice designing ' +
            'and implementing these mechanics in an efficient and dynamic way.',
        overviewVideo: `https://iframe.mediadelivery.net/embed/456458/659e6d91-2d57-4015-a082-bbb25612219a?autoplay=true&loop=true&muted=true&preload=true`,
        mechanic1Name: 'Combat System',
        mechanic1Images: [`/images/projects/TFH/CombatFlowchart.png`, `/images/projects/TheFirstHeroImg.png`],
        mechanic1Showcase: 'https://iframe.mediadelivery.net/embed/456458/5ef411b8-4f52-4095-93c2-9a90a0077cc3?autoplay=true&loop=true&muted=true&preload=true',
        mechanic2Name: '',
        mechanic2Images: [''],
        mechanic2Showcase: '',
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
        image: `/images/projects/TheFirstHeroImg.png`,

        //Project Details Elements
        overview: 'Test 2',
        overviewVideo: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&modestbranding=1&rel=0&showinfo-0',
        mechanic1Name: '',
        mechanic1Images: [''],
        mechanic1Showcase: '',
        mechanic2Name: '',
        mechanic2Images: [''],
        mechanic2Showcase: '',
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
        image: `/images/projects/TheFirstHeroImg.png`,

        //Project Details Elements
        overview: '',
        overviewVideo: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&modestbranding=1&rel=0&showinfo-0',
        mechanic1Name: '',
        mechanic1Images: [''],
        mechanic1Showcase: '',
        mechanic2Name: '',
        mechanic2Images: [''],
        mechanic2Showcase: '',
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
        image: `/images/projects/TheFirstHeroImg.png`,

        //Project Details Elements
        overview: '',
        overviewVideo: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&modestbranding=1&rel=0&showinfo-0',
        mechanic1Name: '',
        mechanic1Images: [''],
        mechanic1Showcase: '',
        mechanic2Name: '',
        mechanic2Images: [''],
        mechanic2Showcase: '',
        media: [''],
        challenges: '',

        projectLink: '',
    },
]

const Projects = () => {
    return (
        <section id="projects" className=" max-w-6xl mx-auto px-6 pt-12 pb-20 min-w-325">
            <h2 className="text-4xl font-bold mb-8 dark:text-white">Projects</h2>
            {/* Project Carousel */}
            <section id="projects-carousel" className="px-4 md:px-12">
                <ProjectCarousel projects={myProjects} />
            </section>
        </section>
    );
};

export default Projects;