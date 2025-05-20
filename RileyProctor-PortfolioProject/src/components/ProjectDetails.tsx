import { useState } from 'react';

type Tab = 'Overview' | 'Tech' | 'Media' | 'Challenges';

interface ProjectDetailsProps {
    title: string;
    overview: string;
    tech: string[];
    media: string[]; //Urls to images or video embeds
    challenges: string;
    onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
    title,
    overview,
    tech,
    media,
    challenges,
    onClose
}) => {
    const [activeTab, setActiveTab] = useState<Tab>('Overview');
    
    const renderTabContent = () => {
        switch (activeTab) {
            case 'Overview':
                return <p className="text-left text-gray-700">{overview}</p>;
            
            case 'Tech':
                return (
                    <ul className="list-disc list-inside text-left text-gray-700">
                        {(tech?.length > 0 ? tech : ['No tech listed']).map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
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
        <div className="mt-10 max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-lg border transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-graay-900">{title}</h2>
                <button onClick={onClose} className="text-sm px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition">Close</button>
            </div>
            
            <div className="flex space-x-4 border-b pb-2 mb-4">
                {(['Overview', 'Tech', 'Media', 'Challenges'] as Tab[]).map(tab => (
                    <button key={tab} className={`pb-2 font-medium transition 
                    ${activeTab === tab 
                        ? 'border-b-2 border-blue-600 text-blue-600' 
                        : 'text-gray-500 hover:text-blue-600'
                    }`}
                    onClick={() => setActiveTab(tab)}>{tab}</button>
                ))}
            </div>
            
            <div className="transition-all">{renderTabContent()}</div>
        </div>
    );
};

export default ProjectDetails;