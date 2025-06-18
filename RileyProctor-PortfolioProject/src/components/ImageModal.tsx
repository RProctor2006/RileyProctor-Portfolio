import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

type FullscreenImageProps = {
    src: string;
    alt?: string;
    className?: string;
};

export default function FullscreenImage({ src, alt = "", className = "" }: FullscreenImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            {/* Thumbnail */}
            <img
                src={src}
                alt={alt}
                onClick={openModal}
                className={`w-64 h-auto rounded-lg cursor-pointer shadow hover:opacity-80 transition ${className}`}
            />

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={closeModal}
                    onKeyDown={(e) => e.key === "Escape" && closeModal()}
                    tabIndex={0}
                >
                    <div
                        className="bg-black/80 p-4 rounded-xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/80 rounded-full p-2"
                        >
                            <FaWindowClose className="w-6 h-6" />
                        </button>

                        <img
                            src={src}
                            alt={alt}
                            className="w-full h-auto max-h-[80vh] object-contain mx-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}
        </>
    );
}