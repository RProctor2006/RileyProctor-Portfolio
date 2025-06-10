import { useState } from 'react';

type Tab = 'Overview' | 'Mechanics' | 'Media' | 'Challenges';

interface ProjectDetailsProps {
    title: string;
    overview: string;
    overviewVideo: string;
    mechanic1Name: string;
    mechanic1Images: string[];
    mechanic1Showcase: string;
    mechanic2Name: string;
    mechanic2Images: string[];
    mechanic2Showcase: string;
    media: string[]; //Urls to images or video embeds
    challenges: string;
    onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
    title,
    overview,
    overviewVideo,
    mechanic1Name,
    mechanic1Images,
    mechanic1Showcase,
    mechanic2Name,
    mechanic2Images,
    mechanic2Showcase,
    media,
    challenges,
    onClose
}) => {
    const [activeTab, setActiveTab] = useState<Tab>('Overview');
    
    const renderTabContent = () => {
        switch (activeTab) {
            case 'Overview':
                return (
                    <div>
                        <iframe
                            className="float-left mr-4 rounded-lg shadow-lg w-[500px] h-[281px]"
                            src={overviewVideo}
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                        <div>
                            <p className="whitespace-pre-line flex-1 text-left text-gray-700 dark:text-gray-300">{overview}</p>
                        </div>
                    </div>
                )
            
            case 'Mechanics':
                return (
                    <div>
                        <h1 className="text-left text-2xl pb-5">{mechanic1Name}:</h1>
                        <div className="flex items-start">
                            <div className="mb-4 space-y-4">
                                <iframe
                                    className="rounded-lg shadow-lg w-[375px] h-[210.75px]"
                                    src={mechanic1Showcase}
                                    frameBorder="0"
                                    allow="autoplay; clipboard-write; encrypyed-media; gyroscope; picture-in-picture"
                                ></iframe>

                                {mechanic1Images.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        className="w-94 h-auto rounded-lg shadow-md"
                                    />
                                ))}
                            </div>
                            <div className="flex-1 text-left px-8">
                                <p>test text</p>
                            </div>
                        </div>
                    </div>
                );

            case 'Media':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(media?.length > 0 ? media : ['No images listed']).map((src, idx) => (
                            <img key={idx} src={src} alt={`media ${idx}`} className="rounded shadow"/>
                        ))}
                    </div>
                );

            case 'Challenges':
                return <p className="text-left text-gray-700">{challenges}</p>;
        }
    };


    return (
        <div
            className="mt-10 max-w-5xl outline-solid mx-auto bg-white outline-lightacc2 shadow-lightacc2/50 dark:bg-darkbgsec dark:shadow-darkbglight/50 dark:outline-darkbglight p-6 rounded-2xl shadow-xl transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold dark:text-white">{title}</h2>
                <button onClick={onClose} className="text-sm px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition">Close</button>
            </div>
            
            <div className="flex space-x-4 border-b pb-2 mb-4">
                {(['Overview', 'Mechanics', 'Media', 'Challenges'] as Tab[]).map(tab => (
                    <button key={tab} className={`pb-2 font-bold transition cursor-pointer 
                    ${activeTab === tab 
                        ? 'border-b-2 border-darklightsec text-black dark:text-white' 
                        : 'text-gray-400 hover:text-lightbutton dark:hover:text-darklightsec'
                    }`}
                    onClick={() => setActiveTab(tab)}>{tab}</button>
                ))}
            </div>
            
            <div className="transition-all">{renderTabContent()}</div>
        </div>
    );
};

export default ProjectDetails;