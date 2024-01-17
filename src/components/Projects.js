import React from "react";
import { projects } from "../data";


const buildingIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto inline-block w-10 mb-4">
        <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
        </svg>
    )
}



export default function Projects(){
   
    return(
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className=" flex flex-col w-full mb-4">
                    {buildingIcon()}
                    <h2 className="sm:text-4xl text-3xl font-medium title-font mb-text-white">Projects</h2>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl mt-4">
                        Hover over each tile to find out more or click to view individual projects.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4">
                    {projects.map((project)=> (

                        <div key={project.image}>
                        <a 
                        href={project.link}
                        className="sm:w-1/2 p-4">

                            <div className="flex relative">
                                <video autoPlay muted loop
                                alt="video of northcoder's new website"
                                className="relative w-full h-full">
                                    <source 
                                    src={project.image} type="video/mp4"></source>
                                </video>

                            <div className="overlay absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 bg-black">                            
                                <h2 className="title-font font-medium text-white text-3xl mb-4">
                                    {project.title}
                                </h2>
                                <p className="leading-relaxed text-3xl mb-4">
                                    {project.description}
                                </p>
                                <h2 className="tracking-widest text-lg title-font font-medium text-green-400 mt-4">
                                    {project.tech}
                                </h2>

                            </div>
                            </div>
                        </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}