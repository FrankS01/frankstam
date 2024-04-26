import React from "react";

interface ProjectProps {
    /** The image source of the project image */
    imgSrc: string;

    /** The project url */
    url: string

    /** The title of the project */
    title: string;

    /** The description of the project */
    description: string;
}

export default function Project({imgSrc, title, description, url}: ProjectProps) {
    return (
        <a href={url}>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-center sm:items-start rounded-md hover:bg-slate-800 hover:drop-shadow-lg transition duration-100">
                <img src={imgSrc} alt={title + " logo"} className="w-[233px] h-[168px] shadow-xl"/>
                <div className="m-0 text-center sm:text-left sm:mx-3 ">
                    <h2 className="text-3xl text-slate-300 mt-1">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    )
}