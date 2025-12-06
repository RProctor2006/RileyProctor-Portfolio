//import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="mx-auto sm:mt-18 md:h-auto md:w-full lg:w-1/2 lg:h-auto md:mt-15 lg:mt-12 ">
            <div className="w-full flex justify-center">
                <video
                    className="sm:min-w-[45vh] md:min-w-full"
                    src="/videos/theFirstHero/CombatShowcase.mp4"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                ></video>
            </div>
        </section>
    );
};

export default Hero;