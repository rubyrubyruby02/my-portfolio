import React from "react";

export default function About(){

    return (
       <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hi, I'm Ruby</h1>
                <p className="mb-8 leading-relaxed">
                    I'm an IT manager, coder and travel-lover. I like blue cheese, brownies, last-minute weekend trip and a bit of running.
                </p>
            
            <div className="flex justify-center">
                <a href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">See my work</a>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                className="object-cover object-center rounded h-50"
                alt="headshot of Ruby"
                src="./rubyheadshot.jpg"></img>
            </div>
        </div>
       </section>
    )

}