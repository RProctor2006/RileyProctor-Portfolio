import { Link } from 'react-router-dom'

function TheFirstHeroPage() {
    return (
        <div className="min-h-screen flex-col justify-items-center bg-white text-black dark:bg-darkbg dark:text-white">
            <div className="pt-24" >
                
                {/*Go Back Button*/}
                <div className="flex justify-start">
                    <Link to="/">
                        <button className=" text-2xl cursor-pointer text-black dark:text-white"> &lt; Go Back</button>
                    </Link>
                </div>

                {/*Image Pic (Replace with gif or video) */}
                <img className="h-130" src="/images/projects/TFH/TFHPagePhoto.png" alt="Project Image" />

                {/*Info Boxes Underneath*/}
                <div className="flex flex-row mt-6">
                  <div className="dark:bg-darkbgsec h-75 w-1/2 mr-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                      {/*About Box*/}
                      <div className="p-4 text-wrap text-left">
                          <h1 className="text-3xl">About</h1>
                          <p className="text-lg pt-4">The First Hero was my final project for my 1st year of University. It is heavily inspired by FromSoftware's souls franchise, it features an in-depth combat
                          system and 3 unique enemy types to learn and fight against!</p>
                      </div>
                      
                  </div>
                  
                  <div className="dark:bg-darkbgsec h-75 w-1/2 ml-3 shadow-lg shadow-lightacc2 outline-solid outline-lightacc2 rounded-xl">
                      {/*Project Info Box*/}
                      
                      
                      
                  </div>  
                </div>
            </div>
        </div>
    )
}

export default TheFirstHeroPage;