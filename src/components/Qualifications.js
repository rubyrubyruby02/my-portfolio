import React from "react";

export default function Qualifications (){

    return(

        <section id="qualifications" className="text-gray-400 bg-gray-900 body-font">

            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <h2 className="sm:text-4xl text-3xl font-medium title-font mb-text-white">
                    Qualifications
                </h2>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl mt-4">
                        I love learning, here are some of the qualifications I've achieved. 
                </p>
            </div>

            <div className="flex flex-wrap -m-4 justify-center items-center mx-3">
                <a href="https://www.credly.com/badges/8cd9849a-24af-4537-b48a-4879440b7248/public_url">     
                <img src="../assets/aws-certified-cloud-practitioner.png" alt="AWS Cloud practitioner badge" className="w-32 h-32" />     
                </a>

                <a href="https://www.apm.org.uk/qualifications-and-training/project-management-qualification/">
                    <img src="../assets/PMQ-badge.png" alt="Project Management Qualification issued by APM" className="w-32 h-32" />
                </a>

                <a href="https://www.axelos.com/certifications/itil-service-management/itil-4-foundation">
                    <img src="../assets/ITIL4.jpg" alt="ITIL Foundation" className="w-32 h-32" />
                </a>
            </div>


        </section>
    )

}