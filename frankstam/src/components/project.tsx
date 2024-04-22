import React from "react";

interface ProjectProps {
    /** The image source of the project image */
    imgSrc: string;

    /** The title of the project */
    title: string;

    /** The description of the project */
    description: string;
}

export default function Project({imgSrc, title, description}: ProjectProps) {
    return (
        <div className="flex flex-row gap-16">
            <img src={imgSrc} alt={title + " logo"} className="w-[263px] h-[190px]"/>
            <div>
                <h2 className="text-3xl text-slate-300">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}