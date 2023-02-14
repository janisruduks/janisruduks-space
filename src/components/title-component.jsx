import React, { useState, useEffect } from "react";

import Avatar from '../assets/pf.png'
import { Link } from "react-router-dom";

const Title = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const fullText = "Hello, I'm Jānis Ruduks. I build things for web.";
    const typing = setTimeout(() => {
      setText(fullText.slice(0, textIndex + 1));
      setTextIndex(textIndex + 1);
    }, 50);

    if (textIndex === fullText.length) {
      clearTimeout(typing);
    }
  }, [textIndex]);


  return (
    <section class="text-white bg-c1/30 border border-black rounded-xl shadow-lg shadow-black my-5 lg:m-3">
    <div
        class="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:h-screen lg:items-center"
    >
        
        <div class="mx-auto max-w-3xl text-center">
            <h1
            className="text-white text-3xl font-extrabold sm:text-5xl"
            >
            {text}
            </h1>
        <img
            src={Avatar}
            class="rounded-full w-32 my-4 mx-auto shadow-md shadow-black"
            alt="Avatar"
        />

        <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            Hire me for top-notch web development. 
            Contact me to discuss your project and how I can help bring your vision to reality
        </p> 

        <div class="mt-8 flex flex-wrap justify-center gap-4">
            <Link
            class="block w-full rounded border border-black bg-white shadow-md shadow-black px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            to='/contact'
            >
            Contact me
            </Link>
        </div>
        <p class='m-3 mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed'>or</p>
        <p class='mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed'>Listen to my favorite band while browsing my space</p>
        <div class='flex items-center justify-center lg:mx-44 mx-10  m-3 rounded-full overflow-hidden border border-black shadow-md shadow-black'>
            <iframe
                style={{ border: 0, width: '100%', height: 42 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3922198912/size=small/bgcol=ffffff/linkcol=333333/transparent=true"
                seamless
            >
                <a href="https://april-rain.bandcamp.com/album/leave-me-no-light">
                Leave Me No Light by April Rain
                </a>
            </iframe>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Title;