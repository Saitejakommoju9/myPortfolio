import { useState } from "react";
import { Link } from "react-router-dom";

function Header(){
    const [showDisplay,setShowDisplay]=useState(false);
    const handleButton=()=>{
        setShowDisplay(!showDisplay);
    }
    console.log(showDisplay);
    return(
        <>
        <div className="w-full justify-between shadow-md fixed top-0 flex h-20 bg-gray-100">
            <h1 className="text-blue-600 my-5 mx-5 md:my-0  md:p-5  md:mx-25 font-bold text-lg md:text-2xl">SAITEJA KOMMOJU</h1>
            <div className=" hidden  md:flex text-blue-600 md:mx-16 font-bold text-lg my-5">
                <p className="px-1 md:px-4"><Link to={"/"}>Home</Link></p>
                <p className="px-1 md:px-4"><Link to={"/About"}>About</Link></p>
                <p className="px-1 md:px-4"><Link to={"/Projects"}>Projects</Link></p>
                <p className="px-1 md:px-4"><Link to={"/Contact"}>Contact</Link></p>
            </div>
            <div>
                <button className="my-5 mx-4 md:hidden cursor-pointer" onClick={handleButton}>
                    {!showDisplay ?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true">
                        <path d="M4 12h16" />
                        <path d="M4 18h16" />
                        <path d="M4 6h16" />
                    </svg>: 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x" aria-hidden="true">
                        <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
                        </svg>}
                </button>
            </div>
            

        </div>
        {
                showDisplay &&
                    <div className="md:hidden fixed z-10 w-full opacity-85 p-4 text-gray-700 bg-gray-50 shadow-sm ">
                        <p className="px-1 md:px-4"><Link to={"/"}>Home</Link></p>
                        <p className="px-1 md:px-4"><Link to={"/About"}>About</Link></p>
                        <p className="px-1 md:px-4"><Link to={"/Projects"}>Projects</Link></p>
                        <p className="px-1 md:px-4"><Link to={"/Contact"}>Contact</Link></p>

                    </div>

                
            }
        </>
    )
}
export default Header;