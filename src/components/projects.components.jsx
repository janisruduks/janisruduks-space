import React from 'react'

import ProjectBar from '../assets/bar-web.png'
import ProjectManul from '../assets/manul-web.png'
import Bweu from '../assets/bweu.eu.png'
import Caramel from '../assets/caramel.lv.png'
import Cathouse from '../assets/cathouse.lv.png'
import LidojosieEngeli from '../assets/lidojosie-engeli.lv.png'
import Pils from '../assets/9pils.lv.png'

import EntranceAnimation from './Animation.component'

const Projects = () => {
  return (
    <div>
        <EntranceAnimation >
        <section className='border border-black rounded-lg bg-c1/30 shadow-md shadow-black lg:m-3'>
            <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div class="grid p-6 bg-c1/10 rounded place-content-center sm:p-8 border border-black">
                        <EntranceAnimation>
                            <div class="max-w-md mx-auto text-center lg:text-left">
                                <header>
                                    <h2 class="text-xl font-bold text-white underline sm:text-3xl">My projects</h2>

                                    <p class="mt-4 text-white">
                                    I'm passionate about creating beautiful and functional websites that enhance the online presence of my clients. In this section, 
                                    you'll find a showcase of some of my best work.
                                    </p>
                                </header>
                            </div>
                        </EntranceAnimation>
                </div>

                <div class="lg:col-span-2 lg:py-8">
                    <ul class="grid grid-cols-3 gap-4">
                        <li>
                        <EntranceAnimation>
                        <a href="https://valhalla-rho.vercel.app/" target="_blank" rel="noopener noreferrer" class="block group">
                            <img
                            src={ProjectBar}
                            alt=""
                            class="object-cover w-full rounded aspect-square transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            />

                        <div class="mt-3 bg-c1/10 rounded border border-black shadow shadow-black p-3">
                            <h3
                                class="font-medium text-white group-hover:underline group-hover:underline-offset-4 transition duration-500 ease-in-out"
                            >
                                Bar Unknown
                            </h3>

                            <p class="mt-1 text-sm text-white/80">Simple yet elegant website for bar</p>
                            </div>
                        </a>
                        </EntranceAnimation>
                        </li>

                        <li>
                            <EntranceAnimation>
                            <a href="https://manul-design.vercel.app/" target="_blank" rel="noopener noreferrer" class="block group">
                            <img
                                src={ProjectManul}
                                alt=""
                                class="object-cover w-full rounded aspect-square transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            />

                            <div class="mt-3 bg-c1/10 rounded border border-black shadow shadow-black p-3">
                                <h3
                                class="font-medium text-white group-hover:underline group-hover:underline-offset-4"
                                >
                                Manul Design
                                </h3>

                                <p class="mt-1 text-sm text-white/80">Website for buisness selling services</p>
                            </div>
                            </a>
                            </EntranceAnimation>
                        </li>
                        <li>
                            <EntranceAnimation>
                            <a href="https://janisruduks.space/9pils" target="_blank" rel="noopener noreferrer" class="block group">
                            <img
                                src={Pils}
                                alt=""
                                class="object-cover w-full rounded aspect-square transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            />

                            <div class="mt-3 bg-c1/10 rounded border border-black shadow shadow-black p-3">
                                <h3
                                class="font-medium text-white group-hover:underline group-hover:underline-offset-4"
                                >
                                9.Pils Gastro Bar
                                </h3>

                                <p class="mt-1 text-sm text-white/80">Simple yet elegant website for bar</p>
                            </div>
                            </a>
                            </EntranceAnimation>
                        </li>
                    </ul>
                </div>
                <div class="lg:col-span-4 lg:py-8">
                    <ul class="grid lg:grid-cols-4 grid-cols-2 gap-4">
                    <li>
                        <EntranceAnimation>
                        <a href="https://lidojosie-engeli.lv/" target="_blank" rel="noopener noreferrer" class="block group">
                        <img
                            src={LidojosieEngeli}
                            alt=""
                            class="object-cover w-full rounded aspect-square transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        />

                        <div class="mt-3 bg-c1/10 rounded border border-black shadow shadow-black p-3">
                            <h3
                            class="font-medium text-white group-hover:underline group-hover:underline-offset-4"
                            >
                            Charity Organizations
                            </h3>

                            <p class="mt-1 text-sm text-white/80">Simple yet elegant website for bar</p>
                        </div>
                        </a>
                        </EntranceAnimation>
                    </li>

                    <li>
                        <EntranceAnimation>
                        <a href="https://caramel.lv/" target="_blank" rel="noopener noreferrer" class="block group">
                        <img
                            src={Caramel}
                            alt=""
                            class="object-cover w-full rounded aspect-square transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        />

                        <div class="mt-3 bg-c1/10 rounded border border-black shadow shadow-black p-3">
                            <h3
                            class="font-medium text-white group-hover:underline group-hover:underline-offset-4"
                            >
                            Selling custom made t-shirts and other clothess
                            </h3>

                            <p class="mt-1 text-sm text-white/80">Website for buisness selling services</p>
                        </div>
                        </a>
                        </EntranceAnimation>
                    </li>
                    <li>
                        <EntranceAnimation>
                        <a href="https://cathouse.lv" target="_blank" rel="noopener noreferrer" class="block group">
                        <img
                            src={Cathouse}
                            alt=""
                            class="object-cover w-full rounded aspect-square transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        />

                        <div class="mt-3 bg-c1/10 rounded border border-black shadow shadow-black p-3">
                            <h3
                            class="font-medium text-white group-hover:underline group-hover:underline-offset-4"
                            >
                            Cathouse Bistro & Hotel
                            </h3>

                            <p class="mt-1 text-sm text-white/80">Website for buisness selling services</p>
                        </div>
                        </a>
                        </EntranceAnimation>
                    </li>
                    <li>
                        <EntranceAnimation>
                        <a href="https://bweu.eu" target="_blank" rel="noopener noreferrer" class="block group">
                        <img
                            src={Bweu}
                            alt=""
                            class="object-cover w-full rounded aspect-square transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        />

                        <div class="mt-3 bg-c1/10 rounded border border-black shadow shadow-black p-3">
                            <h3
                            class="font-medium text-white group-hover:underline group-hover:underline-offset-4"
                            >
                            Best Work Europe
                            </h3>

                            <p class="mt-1 text-sm text-white/80">Website for buisness selling services</p>
                        </div>
                        </a>
                        </EntranceAnimation>
                    </li>
                    </ul>
                </div>

                </div>
            </div>
        </section></EntranceAnimation>
    </div>
  )
}

export default Projects;