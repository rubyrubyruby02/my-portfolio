import React from "react";
//import {CodeIcon} from "@heroicons/react/solid";
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
                <div className=" flex flex-col w-full mb-20">
                    {buildingIcon()}
                    <h2 className="sm:text-4xl text-3xl font-medium title-font mb-text-white">Apps I've built</h2>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-xl mt-4">
                        Hover over each tile to find out more or click to view individual projects.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project)=> (
                        <a 
                        href={project.link}
                        key = {project.image}
                        className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <video playsInline autoPlay muted loop
                                alt="video of northcoder's new website"
                                className="absolute inset-0 w-full h-full object-center"
                                >
                                    <source 
                                    src={project.image} type="video/mp4"></source>
                                </video>

                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>

    )
}