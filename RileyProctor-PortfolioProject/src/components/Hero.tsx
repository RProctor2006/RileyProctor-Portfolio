//import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="sm:w-full mx-auto  sm:h-50 sm:mt-28 md:h-[576px] md:w-[1024px] lg:w-[1360px] lg:h-[765px]  md:mt-15 lg:mt-12 ">
            <video
                src="/videos/theFirstHero/CombatShowcase.mp4"
                autoPlay={true}
                loop={true}
                muted={true}
            ></video>
        </section>
    );
};

export default Hero;