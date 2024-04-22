import React from 'react';

function App() {
    return (
        <div className="flex flex-col text-center items-center m-16 gap-7">
            <header>
                <h1 className="text-5xl text-slate-300 font-medium">Frank Stam</h1>
            </header>
            <main>
                <section id="my-projects" className="mb-12">
                    <div className="flex flex-col gap-4 font-light">
                        <h1 className="text-4xl text-slate-300">My Projects</h1>
                        <p className="text-slate-300">KWARTET</p>
                        <p className="text-slate-300">BATHUNT</p>
                    </div>
                </section>
                <section id="involved-projects" className="mb-12">
                    <div className="flex flex-col gap-4 font-light">
                        <h1 className="text-4xl text-slate-300">Projects I was involved in</h1>
                        <p className="text-slate-300">KWARTET</p>
                        <p className="text-slate-300">BATHUNT</p>
                    </div>
                </section>
                <section id="about" className="mb-12">
                    <div className="flex flex-col gap-4 font-light">
                        <h1 className="text-4xl text-slate-300">About me</h1>
                        <div className="flex flex-row gap-5">
                            <p className="text-slate-300">TODO FOTO</p>
                            <p className="text-slate-300">
                                I’m a developer from the Netherlands.
                                Some of the things that I enjoy in my spare time are gaming, bouldering, geocaching and
                                photography.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
