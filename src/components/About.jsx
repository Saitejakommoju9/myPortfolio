import { skills } from "../utils/constants";
function About(){
    return(
        <>
            <div className="my-22 mx-3">
                <h1 className="text-3xl text-center font-bold">About Me</h1>
                <p className="text-center text-xl text-gray-700 my-3">Frontend Developer| Full stack Developer</p>
                <div className="flex flex-col md:flex-row justify-center my-20">
                    <div className="md:w-1/2  mx-5 md:ml-40 ">
                        <h1 className="font-bold text-2xl">My Journey</h1>
                        <p className="text-md md:w-90 my-2 text-gray-600">
                            Frontend Developer skilled in React.js, JavaScript, and Tailwind CSS, with knowledge of Java, Spring Boot, and SQL. Passionate about creating responsive web applications, learning new technologies, and solving real-world problems through software development.
                        </p>
                        <p className="my-2 md:w-1/2 text-gray-700">
                            Learning node js and mongodb for internships and work with startups.
                        </p>
                        <div>
                            <h1 className="text-lg font-semibold">Education</h1>
                            <p className="text-gray-800">B.Tech in Computer Science</p>
                            <p className="text-gray-600">KL University vijayawada | 2024-2028</p>
                            <p className="text-gray-600">CGPA: 8.63/10</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 mx-5 my-5">
                        <h1 className="text-2xl font-bold">Technical Skills</h1>
                        <div>
                            {
                                skills.map((data)=>(
                                    <div className="mx-1">
                                        <h1>{data.name}</h1>
                                            {data.skillset.map((skill)=>(  <button key={skill.name}className={`mx-2 my-2 rounded-xl p-1 ${
                                            data.name === "Learning"
                                            ? "bg-red-400"
                                            : "bg-green-500"
                                        }`}>{skill.name}</button>))}
                                    </div>
                                ))
                            }
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default About;