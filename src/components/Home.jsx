import { Link } from "react-router-dom";
import myPic from "../assets/myPic.jpeg";
import { data } from "../utils/constants";
function Home(){
    return(
        <>
        <div className="my-20 flex lg:flex-row flex-col  justify-between">
             <div className="w-full lg:w-1/2 mx-2 px-2 lg:mx-20 my-10">
             <h1 className="text-black font-bold text-4xl my-3">ASPIRING DEVELOPER</h1>

             <p className="mx-2 text-2xl font-bold text-black">Hi, I'M Sai Teja Kommoju            KST</p>

                    <p className="font-bold my-2 text-gray-700">I'm a developer who enjoys building modern web applications
                    with React and Tailwind CSS.

                    I have experience creating responsive user interfaces,
                    integrating APIs, and managing application state.

                    On the backend, I have knowledge of Java, Spring Boot,
                     and SQL databases, allowing me to understand
                    the complete application development process </p>

                    <p className="text-gray-500 my-3">Learning: Node js and mongo db</p>
                    <div className="my-4 flex ">
                        <Link to={"/projects"}><button className="bg-blue-600 text-white p-3 rounded-md cursor-pointer">View Projects</button></Link>
                        <a className="my-3 mx-6" href="https://github.com/Saitejakommoju9" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github" aria-hidden="true">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>

                        <a className="my-3 " href="https://linkedin.com/in/saiteja-kommoju-503170301" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin" aria-hidden="true">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            <div className="w-full lg:w-1/2 my-20 flex justify-center lg:justify-end lg:mx-25 ">
               
                <img className="w-70 h-90 md:w-80 rounded-lg object-cover" src={myPic} alt="myPic" />
            </div>
           

            
        </div>
                    <div className="" >
                <h2 className="font-bold text-3xl text-center">Technoligies I work On</h2>
                <div className="flex flex-wrap  my-5 mx-5 justify-center">
                   
                        {
                            data.map((data)=>(
                                <div className="px-3 m-2">
                                    <img className="w-10" src={data.img}/>
                                    <span >{data.name}</span>
                                </div>
                            ))
                        }
                   
                </div>
            </div>
            </>
    )
}
export default Home;