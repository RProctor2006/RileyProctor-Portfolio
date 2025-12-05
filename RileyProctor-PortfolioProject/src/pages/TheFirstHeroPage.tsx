
{/* Site Components */}
import Gallery, { type MediaItem } from "../components/Gallery.tsx";

{/* Essentials */}
import { Link } from 'react-router-dom'

const lockOnItems: MediaItem[] = [
    { type: "video", src: "/videos/theFirstHero/LockOnCodeShowcase.mp4" },
    { type: "image", src: "/images/projects/TFH/LockOnBlueprint.png" },
    { type: "image", src: "/images/projects/TFH/LockOnFunctions.png" },
    { type: "image", src: "/images/projects/TFH/LockOnVariables.png" }
]

const combatComponentItems: MediaItem[] = [
    { type: "video", src: "/videos/theFirstHero/CombatComponentShowcase.mp4" },
    { type: "image", src: "/images/projects/TFH/AttackingCode.png" },
    { type: "image", src: "/images/projects/TFH/RollingCode.png" }
]

const equipmentComponentItems: MediaItem[] = [
    { type: "image", src: "/images/projects/TFH/EquipmentComponentEventGraph.png" },
    { type: "image", src: "/images/projects/TFH/InventoryInterface.png" },
    { type: "image", src: "/images/projects/TFH/AnimVarsInterface.png" }
]

function TheFirstHeroPage() {
    return (
        <div id = "home" className="min-h-screen mx-auto flex justify-items-center bg-white text-black dark:bg-darkbg dark:text-white">

            {/* Side Navigation */}
            <aside className="w-48 text-2xl sticky top-24 h-screen flex flex-col items-center gap-45 p-4 border-r border-lightacc2 dark:border-darklightsec">
                <a href="#home" className="hover:text-lightacc2 dark:hover:text-darklightsec">Start</a>
                <a href="#combat" className="hover:text-lightacc2 dark:hover:text-darklightsec">Combat System</a>
                <a href="#inventory" className="hover:text-lightacc2 dark:hover:text-darklightsec">Inventory System</a>
                <a href="#enemies" className="hover:text-lightacc2 dark:hover:text-darklightsec">Enemies</a>
            </aside>
            
            <div className="">
                {/* Project Intro Section */}
                <div className="pt-20 flex-col justify-items-center">
                    {/* Go Back Button */}
                    <div className="pb-2 max-w-1/2 flex lg:text-2xl">
                        <Link to="/">
                            <button className="cursor-pointer text-black dark:text-white"> &lt; Go Back</button>
                        </Link>

                        <h1 className="md:text-3x flex-1/2 lg:text-4xl">The First Hero</h1>
                    </div>

                    {/* Project Showcase Video */}
                    <video
                        className = "size-full max-w-1/2 mx-auto"
                        src = "/videos/theFirstHero/TheFirstHeroShowcase.mp4"
                        autoPlay={true}
                        loop={true}
                        muted={true}
                    ></video>

                    {/*Info Boxes Underneath*/}
                    <div className="flex flex-row mt-6">
                        <div className="dark:bg-darkbgsec w-1/3 mr-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                            {/*About Box*/}
                            <div className="p-4 text-wrap text-left">
                                <h1 className="text-3xl">About</h1>
                                <p className="text-lg pt-4">The First Hero was my final project for my 1st year of University. It is heavily inspired by FromSoftware's souls franchise, it features an in-depth combat
                                    system and 3 unique enemy types to learn and fight against!</p>
                            </div>
                        </div>

                        <div className="dark:bg-darkbgsec w-1/3 ml-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                            {/*Project Info Box*/}
                            <div className="p-4 text-wrap text-left">
                                <h1 className="text-3xl">Project Info</h1>
                                <p className="text-lg pt-4">Role: Lead Developer</p>
                                <p className="text-lg pt-4">Engine: Unreal Engine 5</p>
                                <p className="text-lg pt-4">Languages: UE Blueprints</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="p-4" >
                    

                    {/*Combat System Section*/}
                    <div id="combat" className="pt-14 flex-col justify-items-start">

                        {/*Combat System Showcase*/}
                        <div className="pt-10 flex-col justify-items-center">
                            <h1 className="text-4xl pb-6">Combat Showcase</h1>
                            <video
                                className = "md:size-full lg:size-8/12"
                                src = "/videos/theFirstHero/CombatShowcase.mp4"
                                autoPlay = {true}
                                loop = {true}
                                muted = {true}
                            >
                            </video>
                        </div>



                        {/*Animation Montages Section*/}
                        <div className="flex flex-row justify-items-center pt-12">
                            {/*<img className="md:size-9/12 md:mx-auto lg:size-8/12" src="/images/projects/TFH/AnimMontageImg.png" alt="TFH_AnimNotifs Placeholder" />*/}
                            <video
                                className="max-w-2/3"
                                src = "/videos/theFirstHero/Animation%20Montages%20Showcase.mp4"
                                autoPlay={true}
                                loop={true}
                            ></video>
                            
                            <div className="max-w-1/3 dark:bg-darkbgsec ml-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                                <div className="p-4 text-wrap text-left">
                                    <h1 className="text-3xl">Animation Montages</h1>
                                    <p className="text-lg pt-4">I designed the combat system to be animation driven, this revolves around the Animation Montage system
                                        in Unreal Engine. I utilised the animation notify classes in order to trigger certain events. This includes: Activating weapon hitboxes,
                                        Motion Warping, Invincibility Frames on rolls, Input windows and more!</p>
                                    <p className="text-lg pt-4">This system is ideal as it allows for more natural feeling combat, instead of inconveniencing myself with
                                        hard coded timings, I can make dynamic, reusable notify events that I can add to whatever animation montage I require.</p>
                                    <p className="text-lg pt-4">As you can see in this video, we have the timeline of the animation and in this timeline are
                                        the animation notify events that do specific tasks. Each one of these animation notifies follows the SOLID programming principles,
                                        specifically the Single Responsibility and the Dependency Inversion principles.</p>
                                </div>
                            </div>
                        </div>

                        {/*Lock On Section*/}
                        <div className="flex md:flex-col lg:flex-row pt-10">
                            {/*<img className="md:size-9/12 lg:h-85 md:mx-auto mb-4" src="/images/projects/TFH/TFH_LockOnFlowchart.png" alt="TFH_AnimNotifs Placeholder" />*/}

                            <Gallery items={lockOnItems}/>

                            <div className="dark:bg-darkbgsec ml-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                                <div className="p-4 text-wrap text-left">
                                    <h1 className="text-3xl">Lock On System</h1>
                                    <p className="text-lg pt-4">The lock on system is one of the most complex systems in the project. I revisited it often during development
                                        in order to account for new situations. </p>
                                    <p className="text-lg pt-4"> Following with the video, the way it works is that I fire a sphere trace that detects all the enemies
                                        in the area. These enemies are then stored in array, after that I create a sphere collision which is attached to the player character, this
                                        will detect any new enemies that enter lock on range, it will check if they are already in the array, if not, they will be added into it. It
                                        will then ascertain the closest enemy and lock onto them.</p>
                                    <p className="text-lg pt-4">To switch targets, it just finds the next closest enemy in the array and sets them as the new target variable.
                                        This event is triggered either manually when the player presses the respective keybind or if the current locked on target dies.</p>
                                    <p className="text-lg pt-4">This system follows the SOLID principles for a start, and almost never uses casts to check against classes. This would be detrimental since there a lot of timers
                                        and frequently running code.</p>
                                </div>
                            </div>
                        </div>

                        {/*Component Section*/}
                        <div className="flex md:flex-col lg:flex-row pt-10">
                            {/*<img className="md:size-9/12 lg:h-85 md:mx-auto pb-4" src="/images/placeholders/TFH_CombatComp_Placeholder.png" alt="TFH_Component Placeholder" />*/}

                            <Gallery items={combatComponentItems}/>

                            <div className="dark:bg-darkbgsec ml-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                                <div className="p-4 text-wrap text-left">
                                    <h1 className="text-3xl">Combat Component</h1>
                                    <p className="text-lg pt-4">The lock on system and the rest of the combat system is programmed inside this combat component,
                                        this allows me to keep my combat code separate which allows for easier debug and testing. </p>
                                    <p className="text-lg pt-4">Creating the combat system in a component allows for me to create a reusable and efficient piece of code that I can add to any character I want and it will work.
                                        This keeps my code clean and effective! This component works in tandem with other components all whilst keeping dependencies to a minimum,
                                        namely, the health and equipment components I made, which I will explain in further detail later. </p>
                                    <p className="text-lg pt-4">In the video you can see the process of the attacking and rolling mechanics which are essential to the complete
                                        combat system. All of the variables and functions are categorised sensibly, and essential variables are exposed so that designers can alter
                                        the functionality of the mechanics to their liking without having to delve into code and look at the inner workings.</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/*Inventory System Section*/}
                    <div id="inventory" className="pt-14 flex-col justify-items-start">

                        {/*Inventory System Showcase*/}
                        <div className="pt-10 flex-col justify-items-center">
                            <h1 className="text-4xl pb-6">Inventory Showcase</h1>
                            <video
                                className = "size-8/12"
                                src = "/videos/theFirstHero/InventoryShowcase.mp4"
                                autoPlay = {true}
                                loop = {true}
                                muted = {true}
                            >
                            </video>
                        </div>

                        {/* Saving & Loading */}
                        <div className="flex md:flex-col lg:flex-row pt-12">
                            <video
                                className="md:size-10/12 md:mx-auto md:pb-4 lg:size-12/17"
                                src = "/videos/theFirstHero/InventorySaveLoad.mp4"
                                autoPlay={true}
                                loop={true}
                            ></video>
                            <div className="dark:bg-darkbgsec ml-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                                <div className="p-4 text-wrap text-left">
                                    <h1 className="text-3xl">Saving and Loading</h1>
                                    <p className="text-lg pt-4">One of the most challenging aspects of the inventory system was saving the positions of items in the
                                        inventory grid, this was an essential quality of life feature. It would feel bad for a player if their items just reset to the
                                        earliest available slot. Especially with an inventory where a lot of people play differently, some players don't care where their
                                        items are, whilst on the other hand, some players are very adamant on organising their inventory in specific ways.</p>
                                    <p className="text-lg pt-4">When the player opens the inventory it instantly saves and loads the current inventory grids, there
                                        are 3 separate grids. The main inventory grid, the armour slots, and the weapons slots. You can see in the video, the save system
                                        cycles through all of the grids and for each of their elements that aren't empty, it saves a reference to that object and its grid index
                                        in a map.</p>
                                    <p className="text-lg pt-4">The map takes an integer as the key and a primary data asset as the value, these maps are stored in the
                                        player controller for data persistence when the player opens and closes the inventory.</p>
                                </div>
                            </div>
                        </div>

                        {/* Equipment Component */}
                        <div className="flex md:flex-col lg:flex-row pt-10">
                            <Gallery items={equipmentComponentItems}/>
                            <div className="dark:bg-darkbgsec ml-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                                <div className="p-4 text-wrap text-left">
                                    <h1 className="text-3xl">Equipment Component</h1>
                                    <p className="text-lg pt-4">For all of my components I utilise blueprint interfaces heavily, these allow me to do 2 main things. Get
                                        references to classes without having to cast, this is best thought about as instead of getting the whole library, you can just get the
                                        specific book you need. Reason 2 being that it is a great form of blueprint communication, allowing me to call functions from other classes
                                        without having a complete reference.</p>
                                    <p className="text-lg pt-4">This component is responsible for spawning the characters weapons, handling weapon data,
                                        communicating with the inventory UI and communicating with the combat components. This component handles the weapon data assets
                                        which hold the weapon variables needed. Such as mesh, animation montage, damage, etc.</p>
                                    <p className="text-lg pt-4">On the side are my variables and functions, as well as the interface functions. I make it a
                                        priority to practice clean and neat code and categorisation</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enemies Section */}
                    <div id="enemies" className="pt-14 flex-col justify-items-start">

                        {/*Enemies Showcase*/}
                        <div className="pt-10 flex-col justify-items-center">
                            <h1 className="text-4xl pb-6">Enemies Showcase</h1>
                            <video
                                className = "size-8/12"
                                src = "/videos/theFirstHero/EnemiesShowcase.mp4"
                                autoPlay = {true}
                                loop = {true}
                                muted = {true}
                            >
                            </video>
                        </div>

                        {/* Enemy Types */}
                        <div className="flex md:flex-col lg:flex-row pt-12">
                            <video
                                className="md:size-10/12 md:mx-auto md:pb-4 lg:size-12/17"
                                src = "/videos/theFirstHero/EnemyTypes.mp4"
                                autoPlay={true}
                                loop={true}
                            ></video>
                            <div className="dark:bg-darkbgsec ml-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                                <div className="p-4 text-wrap text-left">
                                    <h1 className="text-3xl">Enemy Types</h1>
                                    <p className="text-lg pt-4">There are 3 types of enemies, the basic enemy, fast enemy, and heavy enemy. These enemies all have different
                                    behaviours, damage amounts and functionality.</p>
                                    <p className="text-lg pt-4">The fast enemy retreats to safety so it can't be hit, then attacks when the time is right. It is the only 
                                    enemy that can walk backwards and it has the furthest stagger distance as it is the lightest enemy.</p>
                                    <p className="text-lg pt-4">The basic enemy is the average mob, it comes towards you and attacks when in range. It has more health than 
                                    the fast enemy, does more damage and doesn't stagger as far.</p>
                                    <p className="text-lg pt-4">Finally, the heavy enemy, this enemy doesn't stagger at all and does the most damage. It also has the most health 
                                    but is very slow. You can easily dodge it's attacks or walk out of range.</p>
                                </div>
                            </div>
                        </div>

                        {/* Enemy Development */}
                        <div className="flex md:flex-col lg:flex-row pt-10">
                            <Gallery items={equipmentComponentItems}/>
                            <div className="dark:bg-darkbgsec ml-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                                <div className="p-4 text-wrap text-left">
                                    <h1 className="text-3xl">Enemy Development</h1>
                                    <p className="text-lg pt-4">For all of my components I utilise blueprint interfaces heavily, these allow me to do 2 main things. Get
                                        references to classes without having to cast, this is best thought about as instead of getting the whole library, you can just get the
                                        specific book you need. Reason 2 being that it is a great form of blueprint communication, allowing me to call functions from other classes
                                        without having a complete reference.</p>
                                    <p className="text-lg pt-4">This component is responsible for spawning the characters weapons, handling weapon data,
                                        communicating with the inventory UI and communicating with the combat components. This component handles the weapon data assets
                                        which hold the weapon variables needed. Such as mesh, animation montage, damage, etc.</p>
                                    <p className="text-lg pt-4">On the side are my variables and functions, as well as the interface functions. I make it a
                                        priority to practice clean and neat code and categorisation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TheFirstHeroPage;