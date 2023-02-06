import React from 'react'

import ProjectBar from '../assets/bar-web.png'
import ProjectManul from '../assets/manul-web.png'
import Bweu from '../assets/bweu.eu.png'
import Caramel from '../assets/caramel.lv.png'
import Cathouse from '../assets/cathouse.lv.png'
import LidojosieEngeli from '../assets/lidojosie-engeli.lv.png'
import Pils from '../assets/9pils.lv.png'

const Projects = () => {
  return (
    <div>
        <section className='border border-black rounded-lg bg-c1/30 shadow-md shadow-black lg:m-3'>
            <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                <div class="grid p-6 bg-white/80 rounded place-content-center sm:p-8 border border-black">
                    <div class="max-w-md mx-auto text-center lg:text-left">
                    <header>
                        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">My projects</h2>

                        <p class="mt-4 text-gray-500">
                        I'm passionate about creating beautiful and functional websites that enhance the online presence of my clients. In this section, 
                        you'll find a showcase of some of my best work.
                        </p>
                    </header>

                    <a
                        href="#"
                        class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                    >
                        Shop All
                    </a>
                    </div>
                </div>

                <div class="lg:col-span-2 lg:py-8">
                    <ul class="grid grid-cols-2 gap-4">
                    <li>
                        <a href="https://valhalla-rho.vercel.app/" target="_blank" rel="noopener noreferrer" class="block group">
                        <img
                            src={ProjectBar}
                            alt=""
                            class="object-cover w-full rounded aspect-square"
                        />

                        <div class="mt-3">
                            <h3
                            class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                            >
                            Bar Unknown
                            </h3>

                            <p class="mt-1 text-sm text-gray-700">Simple yet elegant website for bar</p>
                        </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://manul-design.vercel.app/" target="_blank" rel="noopener noreferrer" class="block group">
                        <img
                            src={ProjectManul}
                            alt=""
                            class="object-cover w-full rounded aspect-square"
                        />

                        <div class="mt-3">
                            <h3
                            class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                            >
                            Manul Design
                            </h3>

                            <p class="mt-1 text-sm text-gray-700">Website for buisness selling services</p>
                        </div>
                        </a>
                    </li>
                    </ul>
                </div>
                <div class="lg:col-span-4 lg:py-8">
                    <ul class="grid lg:grid-cols-4 grid-cols-2 gap-4">
                    <li>
                        <a href="https://lidojosie-engeli.lv/" target="_blank" rel="noopener noreferrer" class="block group">
                        <img
                            src={LidojosieEngeli}
                            alt=""
                            class="object-cover w-full rounded aspect-square"
                        />

                        <div class="mt-3">
                            <h3
                            class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                            >
                            Charity Organizations
                            </h3>

                            <p class="mt-1 text-sm text-gray-700">Simple yet elegant website for bar</p>
                        </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://caramel.lv/" target="_blank" rel="noopener noreferrer" class="block group">
                        <img
                            src={Caramel}
                            alt=""
                            class="object-cover w-full rounded aspect-square"
                        />

                        <div class="mt-3">
                            <h3
                            class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                            >
                            Selling custom made t-shirts and other clothess
                            </h3>

                            <p class="mt-1 text-sm text-gray-700">Website for buisness selling services</p>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://cathouse.lv" target="_blank" rel="noopener noreferrer" class="block group">
                        <img
                            src={Cathouse}
                            alt=""
                            class="object-cover w-full rounded aspect-square"
                        />

                        <div class="mt-3">
                            <h3
                            class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                            >
                            Cathouse Bistro & Hotel
                            </h3>

                            <p class="mt-1 text-sm text-gray-700">Website for buisness selling services</p>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://bweu.eu" target="_blank" rel="noopener noreferrer" class="block group">
                        <img
                            src={Bweu}
                            alt=""
                            class="object-cover w-full rounded aspect-square"
                        />

                        <div class="mt-3">
                            <h3
                            class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                            >
                            Best Work Europe
                            </h3>

                            <p class="mt-1 text-sm text-gray-700">Website for buisness selling services</p>
                        </div>
                        </a>
                    </li>
                    </ul>
                </div>

                <div class="lg:col-span-4 lg:py-8">
                    <ul class="grid lg:grid-cols-4 grid-cols-2 gap-4">
                    <li>
                        <a href="https://janisruduks.space/9pils" target="_blank" rel="noopener noreferrer" class="block group">
                        <img
                            src={Pils}
                            alt=""
                            class="object-cover w-full rounded aspect-square"
                        />

                        <div class="mt-3">
                            <h3
                            class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                            >
                            9.Pils Gastro Bar
                            </h3>

                            <p class="mt-1 text-sm text-gray-700">Simple yet elegant website for bar</p>
                        </div>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Projects;