//import React, 
import { useState } from 'react'
import Slider from 'react-slick'
import { Link } from "react-router-dom";

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


{/* Project Template */}
type Project = {
    //Card elements
    title: string;
    role: string;
    languagesUsed: string;
    description: string;
    image: string;
    pageLink: string;
    
    projectLink: string;
};

type Props = {
    projects: Project[];
};

const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-black dark:text-white"
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
            className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-black dark:text-white"
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
        <div className="md:w-full my-8 px-4 ">
            <Slider {...settings}>
                {projects.map((project, i) => (
                    <div key={i} className="px-4 transition-transform relative pb-16 overflow-visible duration-300">
                        <div
                            className={`bg-white p-4 md:h-133 md:w-auto lg:h-auto flex flex-col justify-start rounded-lg shadow-xl transform outline-solid outline-lightacc2 shadow-lightacc2/50 dark:shadow-darkbglight/50 dark:bg-darkbgsec dark:outline-darkbglight ${i === activeSlide ? 'scale-97 shadow-2xl z-10' : 'scale-93 opacity-70'}`}>
                            {/* Display Project Variables */}
                            <img src={project.image} alt={project.title}
                                 className={`lg:w-full mx-auto aspect-square md:w-55 object-cover rounded-lg`}/>

                            <h3 className="text-lg font-bold mt-4 text-lightacc1 dark:text-darklight">{project.title}</h3>

                            <div className="text-gray-700 dark:text-gray-300">
                                <div className="text-sm font-medium">
                                    <span className="font-bold">Role:</span> {project.role}
                                </div>
                                <div className="text-sm">
                                    <span className="font-bold">Languages Used:</span> {project.languagesUsed}
                                </div>
                                <p className=" mt-2">{project.description}</p>
                            </div>
                            

                            {!showDetails && i === activeSlide && (
                                <Link to={project.pageLink}>
                                    <button
                                        className="my-auto px-4 py-2 bg-darkbg font-bold cursor-pointer text-white rounded-lg hover:bg-lightbutton dark:hover:bg-darklightsec hover:text-black transition-colors duration-200"
                                    >
                                        View Project
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProjectCarousel;
