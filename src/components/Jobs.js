import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import {jobs} from "../data";

export default function Jobs(){

    return(
        <section id="jobs" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className=" flex flex-col w-full mb-4">
                        <CodeIcon className="mx-auto inline-block w-10 mb-4"/>
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-text-white">Previous Jobs</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl mt-4 mb-4">From teaching to IT, I'm a career switcher who specialises in IT project management</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {jobs.map((job)=>(
                        <div
                        key = {job.image}
                        className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img 
                                alt="gallery of images"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={job.image}
                                />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {job.employeer}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {job.title}
                                </h1>

                                <ul className="list-disc text-white mb-4">
                                    {job.description.map((point, index) => (
                                    <li key={index}>{point}</li>
                                    ))}
                                </ul>
                                    
                            </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>

        
    )

}