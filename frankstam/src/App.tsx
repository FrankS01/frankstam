import React from 'react';
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFlickr } from "react-icons/fa";

// Images imports
import profile from './images/profile.png';
import kwartet from './images/kwartet.png';
import bathunt from './images/bathunt.png';
import patternpal from './images/patternpal.png';
import pairless from './images/pairless.png';

import Project from "./components/project";

function App() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col mt-20 mx-8 gap-7">
                <header>
                    <h1 className="text-5xl text-slate-300 font-medium text-center">Frank Stam</h1>
                </header>
                <main>
                    <section id="my-projects" className="mb-12">
                        <div className="flex flex-col gap-7 font-light max-w-3xl">
                            <h1 className="text-4xl text-slate-300 text-center">My Projects</h1>
                            <Project imgSrc={kwartet}
                                     title="Kwartet"
                                     description="An online editor which can be used to create your own games of quartets."
                                     url="https://kwartet.frankstam.dev"/>
                            <Project imgSrc={bathunt}
                                     title="Bathunt"
                                     description="The first game I have ever released.
                                     Inspired by the old-school game Duckhunt, the objective of this game is to shoot bats to score points."
                                     url="https://frank-s.itch.io/bathunt"/>
                        </div>
                    </section>
                    <section id="involved-projects" className="mb-12">
                        <div className="flex flex-col gap-7 font-light max-w-3xl">
                            <h1 className="text-4xl text-slate-300 text-center">Projects I was involved in</h1>
                            <Project imgSrc={pairless}
                                     title="Pairless"
                                     description="Top-down pixel adventure game that does not take itself too seriously. Created during a school project."
                                     url="https://sleepy-wolf-studios.itch.io/pairless"/>
                            <Project imgSrc={patternpal}
                                     title="Patternpal"
                                     description="PatternPal is a Visual Studio extension that can recognize software design patterns in your code.
                                     It also contains a step-by-step mode for learning new design patterns."
                                     url="https://github.com/PatternPal/PatternPal"/>
                        </div>
                    </section>
                    <section id="about">
                        <div className="flex flex-col gap-6 font-light max-w-3xl">
                            <h1 className="text-4xl text-slate-300 text-center">About me</h1>
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-16 text-center sm:text-left">
                                <div className="min-w-[233px] flex justify-center sm:justify-end">
                                    <img src={profile} alt="Frank Stam" className="h-[150px]"/>
                                </div>
                                <p>
                                    I’m a developer from the Netherlands.
                                    Some of the things that I enjoy in my spare time are gaming, bouldering, geocaching
                                    and
                                    photography.
                                    I post the pictures I take as <i>Shots by Frank</i> on Instagram and Flickr.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <div className="flex flex-row justify-center mb-6">
                        <IconContext.Provider value={{size: "2em", className: "text-gray-400 hover:text-gray-300" }}>
                            <div className="flex flex-row justify-center gap-5">
                                <a href="https://github.com/FrankS01/" title="GitHub"><FaGithub/></a>
                                <a href="https://gitlab.com/FrankS01/" title="GitLab"><FaGitlab/></a>
                                <a href="https://www.instagram.com/shots_by_frank/" title="Instagram - Shots by Frank"><FaInstagram/></a>
                                <a href="https://flickr.com/photos/shots_by_frank/" title="Flickr - Shots by Frank"><FaFlickr/></a>
                            </div>
                        </IconContext.Provider>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default App;
