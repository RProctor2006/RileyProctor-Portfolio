import { Link } from 'react-router-dom'

function TheFirstHeroPage() {
    return (
        <div className="min-h-screen mx-auto flex-col justify-items-center bg-white text-black dark:bg-darkbg dark:text-white">

            {/*Project Intro Section*/}
            <div className="pt-20 flex flex-col max-w-1/2">
                {/*Go Back Button*/}
                <div className="flex justify-start">
                    <Link to="/">
                        <button className=" text-2xl cursor-pointer text-black dark:text-white"> &lt; Go Back</button>
                    </Link>
                </div>

                {/*Image Pic (Replace with gif or video) */}
                <img className="h-130" src="/images/projects/TFH/TFHPagePhoto.png" alt="Project Image" />
            </div>
             
                

            <div className="max-w-8/12" >
                {/*Info Boxes Underneath*/}
                <div className="flex flex-row mt-6">
                  <div className="dark:bg-darkbgsec w-1/2 mr-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                      {/*About Box*/}
                      <div className="p-4 text-wrap text-left">
                          <h1 className="text-3xl">About</h1>
                          <p className="text-lg pt-4">The First Hero was my final project for my 1st year of University. It is heavily inspired by FromSoftware's souls franchise, it features an in-depth combat
                          system and 3 unique enemy types to learn and fight against!</p>
                      </div>
                  </div>
                  
                  <div className="dark:bg-darkbgsec w-1/2 ml-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                      {/*Project Info Box*/}
                      <div className="p-4 text-wrap text-left">
                          <h1 className="text-3xl">Project Info</h1>
                          <p className="text-lg pt-4">Role: Lead Developer</p>
                          <p className="text-lg pt-4">Engine: Unreal Engine 5</p>
                          <p className="text-lg pt-4">Languages: UE Blueprints</p>
                      </div>
                  </div>  
                </div>

                {/*Combat System Section*/}
                <div className="pt-10 flex-col justify-items-start">
                    <h1 className="text-3xl ">Combat System</h1>

                    {/*Animation Montages Section*/}
                    <div className="flex flex-row pt-4">
                        <img className="h-85" src="/images/placeholders/TFH_AnimNotifs_Placeholder.png" alt="TFH_AnimNotifs Placeholder" />
                        <div className="dark:bg-darkbgsec ml-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                            <div className="p-4 text-wrap text-left">
                                <h1 className="text-3xl">Animation Montages</h1>
                                <p className="text-lg pt-4">I designed the combat system to be animation driven, this revolves around the Animation Montage system
                                in Unreal Engine. I utilised the animation notify classes in order to trigger certain events. This includes: Activating weapon hitboxes,
                                Motion Warping, Invincibility Frames on rolls, Input windows and more!</p>
                                <p className="text-lg pt-4">This system is ideal as it allows for more natural feeling combat, instead of inconveniencing myself with hard coded timings, I can make dynamic, reusable notify events that I can add to whatever animation montage I require.</p>
                            </div>
                        </div>
                    </div>

                    {/*Lock On Section*/}
                    <div className="flex flex-row pt-10">
                        <img className="h-85" src="/images/projects/TFH/TFH_LockOnFlowchart.png" alt="TFH_AnimNotifs Placeholder" />
                        <div className="dark:bg-darkbgsec ml-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                            <div className="p-4 text-wrap text-left">
                                <h1 className="text-3xl">Lock On System</h1>
                                <p className="text-lg pt-4">The lock on system is one of the most complex systems in the project. I revisited it often during development
                                in order to account for new situations. As seen in the flowchart, the way it works is that I fire a sphere trace that detects all the enemies
                                in the area. These enemies are then stored in array, after that I create a sphere collision which is attached to the player character, this
                                will detect any new enemies that enter lock on range, it will check if they are already in the array, if not, they will be added into it. It 
                                will then ascertain the closest enemy and lock onto them.</p>
                                <p className="text-lg pt-4">To switch targets, it just finds the next closest enemy in the array and changes target.</p>
                                
                            </div>
                        </div>
                    </div>

                    {/*Component Section*/}
                    <div className="flex flex-row pt-10">
                        <img className="h-85" src="/images/placeholders/TFH_CombatComp_Placeholder.png" alt="TFH_Component Placeholder" />
                        <div className="dark:bg-darkbgsec ml-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                            <div className="p-4 text-wrap text-left">
                                <h1 className="text-3xl">Combat Component</h1>
                                <p className="text-lg pt-4">The other half of the combat system was done inside a combat component I created. Creating the combat system
                                in a component allows for me to create a reusable and efficient piece of code that I can add to any character I want and it will work.
                                This keeps my code clean and effective, as well as making it easier to debug if anything goes wrong! This component works in tandem with 
                                other components, namely, the health and equipment components I have, which I will explain in further detail later. </p>
                            </div>
                        </div>
                    </div>

                    {/*Combat System Showcase*/}
                    <div className="pt-6 flex-col justify-items-start">
                        <h1 className="text-3xl">Showcase</h1>
                        <iframe width="960" height="540"
                                src="https://www.youtube.com/embed/K8uVbyoCZ8s?si=xHEGanYorwEvBw2u"
                                title="Combat Showcase Video" frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheFirstHeroPage;