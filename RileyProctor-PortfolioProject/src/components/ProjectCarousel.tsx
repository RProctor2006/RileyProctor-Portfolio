//import React, 
import { useState } from 'react'
import Slider from 'react-slick'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProjectDetails from "./ProjectDetails.tsx";


{/* Project Template */}
type Project = {
    //Card elements
    title: string;
    role: string;
    languagesUsed: string;
    description: string;
    image: string;

    //Tab elements
    overview: string;
    tech: string[];
    media: string[];
    challenges: string;
    
    projectLink: string;
};

type Props = {
    projects: Project[];
};

const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-black"
            onClick={onClick}
        >
            <FaArrowLeft size={30} />
        </div>
    );
};

const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-black"
            onClick={onClick}
        >
            <FaArrowRight size={30} />
        </div>
    )
}

const ProjectCarousel = ({ projects }: Props) => {

    const [showDetails] = useState(false);
    const [detailsIndex, setDetailsIndex] =useState<number | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    {/* Carousel Settings */}
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px',
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        beforeChange: (_: number, next: number) => {
            setActiveSlide(next);
            if (detailsIndex !== null) setDetailsIndex(next);   
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                },
            },
        ],
    };
    
    

    {/* Main Carousel Section */}
    return (
        <div className="my-12">
            <Slider {...settings}>
                {projects.map((project, i) => (
                    <div key={i} className="px-4 transition-transform duration-300">
                        <div
                            className={`bg-white p-4 rounded-lg shadow-md transform ${i === activeSlide ? 'scale-105 shadow-2xl z-10' : 'scale-95 opacity-70'}`}>
                            {/* Display Project Variables */}
                            <img src={project.image} alt={project.title}
                                 className="w-64 mx-auto aspect-square object-cover rounded"/>

                            <h3 className="text-lg font-bold mt-4">{project.title}</h3>
                            <div className="text-sm text-gray-700 font-medium">
                                <span className="font-bold">Role:</span> {project.role}
                            </div>
                            <div className="text-sm text-gray-700">
                                <span className="font-bold">Languages Used:</span> {project.languagesUsed}
                            </div>
                            <p className="text-gray-600 mt-2">{project.description}</p>

                            {!showDetails && i === activeSlide && (
                                <button
                                    className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                    onClick={() => setDetailsIndex(i)}
                                >
                                    View Project
                                </button>

                            )}
                        </div>
                    </div>
                ))}
            </Slider>


            {detailsIndex !== null && (
                <ProjectDetails
                    title={projects[detailsIndex].title}
                    overview={projects[detailsIndex].overview}
                    tech={projects[detailsIndex].tech}
                    media={projects[detailsIndex].media}
                    challenges={projects[detailsIndex].challenges}
                    onClose={() => setDetailsIndex(null)}
                />
            )}
        </div>
    );
};

export default ProjectCarousel;
