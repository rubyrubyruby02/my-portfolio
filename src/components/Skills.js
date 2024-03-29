import React from "react";
import { skills } from "../data";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

export default function Skills(){

    return(
        <section id="skills" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-4 py-5 mx-auto">
                <div className="text-center mb-4">
                    <ChipIcon className="w-10 inline-block mb-4"/>
                    <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                        Coding Skills
                    </h2>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl mt-4">
                        The journey started with HTML & CSS but moved to have a data focus as I used SQL and PowerBi in my last job. I then went on to learn JavaScript and React during my Software Bootcamp with Northcoders. 
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill)=> (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                            <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                            <span className="title-font font-medium text-white">
                                {skill}
                            </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
    
}