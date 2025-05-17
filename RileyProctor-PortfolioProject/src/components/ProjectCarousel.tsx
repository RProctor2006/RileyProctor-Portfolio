import React, { useState } from 'react'
import Slider from 'react-slick'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

{/* Project Template */}
type Project = {
    title: string;
    role: string;
    languagesUsed: string;
    description: string;
    image: string;
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
        beforeChange: (_: number, next: number) => setActiveSlide(next),
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
                        <div className={`bg-white p-4 rounded-lg shadow-md transform ${i === activeSlide ? 'scale-105 shadow-2xl z-10' : 'scale-95 opacity-70'}`}>
                            {/* Display Project Variables */}
                            <img src={project.image} alt={project.title} className="w-64 mx-auto aspect-square object-cover rounded" />
                            <h3 className="text-lg font-bold mt-4">{project.title}</h3>
                            <h2 className="text-lg font-semibold mt-3">{project.role}</h2>
                            <h2 className="text-lg font-semibold mt-3">{project.languagesUsed}</h2>
                            <p className="text-gray-600 mt-2">{project.description}</p>

                            {/* Link to View Project */}
                            <a href={project.projectLink} target="_blank" rel="noopner noreferrer" className="text-blue-50 hover:underline mt-3 inline-block">View Project</a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProjectCarousel;
