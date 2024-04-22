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
            <div className="flex flex-row gap-16 hover:bg-slate-800 rounded-md">
                <img src={imgSrc} alt={title + " logo"} className="w-[233px] h-[168px] shadow-xl"/>
                <div>
                    <h2 className="text-3xl text-slate-300">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    )
}