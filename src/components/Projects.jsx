import { projects } from "../utils/constants";

function Projects(){
    return(
        <div className="mt-28">
            <h1 className="font-bold text-3xl text-center">Projects</h1>
            <p className="text-center text-2xl text-gray-800">Ideas I've Built</p>
            <div className="flex flex-wrap  px-2 justify-center my-10">
                {
                    projects.map((data)=>(
                        <div className="w-full md:w-75  mx-10 my-4 rounded-lg  shadow-md">
                            <img src={data.img} className="w-full rounded-lg h-40 object-cover"/>
                            <h1 className="mx-4 my-2 text-xl font-semibold ">{data.name}</h1>
                            <p className="mx-4 my-2">{data.description}</p>
                            <div className="mx-2 my-3">
                            {
                                data.technologes.map((skills)=>(
                                    <button key={skills} className="p-1 mx-2 bg-gray-300 rounded-lg text-xs">{skills}</button>
                                ))
                            }
                            </div>
                            <div className="flex mx-3 px-2 my-5 cursor-pointer">
                                <a href={data.gitLink}>
                                <div className="flex text-gray-700 hover:text-black text-sm">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-github "
                                    aria-hidden="true"
                                    >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                    <p className=" px-1">Code</p>
                                </div>
                                </a>
                                <a href={data.demoLink}>
                                <div className="text-blue-600 flex text-sm mx-2 hover:text-blue-400">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-mail"
                                    aria-hidden="true"
                                    >
                                    <path d="M15 3h6v6" />
                                    <path d="M10 14 21 3" />
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    </svg>
                                    <p>Chect it</p>
                                </div>
                                </a>
                            </div>
                        </div>
                    )

                    )
                }
            </div>

        </div>

    );

}
export default Projects;