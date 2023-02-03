import React from 'react'

import Avatar from '../assets/pf.png'

const Title = () => {
  return (
    <section class="text-white bg-c1/30 border border-black rounded-xl shadow-lg shadow-black my-5 lg:m-3">
    <div
        class="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:h-screen lg:items-center"
    >
        <div class="mx-auto max-w-3xl text-center">
        <h1
            class="text-white text-3xl font-extrabold sm:text-5xl"
        >
            Hello, I'm Jānis Ruduks

            <span class="sm:block"> I build things for web </span>
        </h1>
        <img
            src={Avatar}
            class="rounded-full border border-black/30 shadow-xl shadow-black w-32 my-4 mx-auto"
            alt="Avatar"
        />

        <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            Hire me for top-notch web development. 
            Contact me to discuss your project and how I can help bring your vision to reality
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
            class="block w-full rounded border border-black bg-white shadow shadow-black px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/get-started"
            >
            Contact me
            </a>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Title;