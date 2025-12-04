import React, { useState } from 'react';

export interface MediaItem {
    type: "image" | "video";
    src: string;
}

interface MediaGalleryProps {
    items:MediaItem[];
}

const Gallery: React.FC<MediaGalleryProps> = ({
    items,
}) => {
    const [index, setIndex] = useState(0);
    
    const current = items[index];
    
    const goNext = () => setIndex((i) => (i + 1) % items.length);
    const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length);
    
    return (
        <div className = "flex flex-col items-center gap-4">
            {/* Media Box */}
            <div className={`lg:min-w-[1080px] lg:min-h-[607px] lg:max-h-[607px] dark:bg-darkbgsec  overflow-hidden flex justify-center items-center`}>
                {current.type === "image" ? (
                    <img 
                        src={current.src}
                        className = "w-auto h-auto object-cover"
                    />
                ) : (
                    <video 
                        className="size-full object-cover"
                        src={current.src}
                        autoPlay={true}
                        loop={true}
                    />
                )}
            </div>

            {/* Controls */}
            <div className="flex gap-4 md:pb-6">
                <button onClick={goPrev} className="px-4 py-2 bg-lightacc1 dark:bg-darklightsec rounded-lg shadow hover:opacity-80 transition">
                    ←
                </button>

                <button
                    onClick={goNext}
                    className="px-4 py-2 bg-lightacc1 dark:bg-darklightsec rounded-lg shadow hover:opacity-80 transition"
                >
                    →
                </button>
            </div>
        </div>
    )
}

export default Gallery;