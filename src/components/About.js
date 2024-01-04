import React from "react";


export default function About(){

    return (
       <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white">Hi, I'm Ruby</h1>
                <h2 className="mb-8 leading-relaxed text-3xl">
                    I'm an IT manager, coder and travel-lover. I like blue cheese, brownies, last-minute weekend trips and a bit of running.
                </h2>
            
            <div className="flex justify-center">
                <a href="https://www.linkedin.com/in/ruby-riley02/"
                className="inline-flex bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:rounded text-lg w-32 mr-8">
                    <img src="../../assets/linkedin.png" alt="linkedIn"/>
                </a>
                <a href="https://github.com/rubyrubyruby02"
                className="inline-flex bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:rounded text-lg w-32">
                    <img src="../../assets/githubLogo.png" alt="github"/>
                </a>
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