import React from 'react'
import EntranceAnimation from './Animation.component';

const AboutMe = () => {
  return (
    <section className="p-6 bg-c1/30 rounded-xl border border-black m-3 shadow-lg shadow-black">
        <div className="container mx-auto">
            <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-black">🔍 Getting details</span>
            <h2 className="text-5xl font-bold text-center dark:text-gray-50">About me</h2>
            <EntranceAnimation>
            <div className="grid gap-6 my-16 lg:grid-cols-3">
                <div className="flex flex-col p-8 space-y-4 rounded-md shadow shadow-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-white/80">💻</div>
                    <p className="text-xl">
                        <b>I'm learning!</b> I'm currently working to master Javascript, C#, and Python 🤓, and I'm eager to dive into frameworks like ReactJS and Tailwind 🚀.
                    </p>
                </div>
                <div className="flex flex-col p-8 space-y-4 rounded-md shadow shadow-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-white/80">🔧</div>
                    <p className="text-xl">
                        <b>Passionate.</b> I love the challenge of building something functional and beautiful 🎨, and I'm always looking for new ways to improve my skills and knowledge 💪.
                    </p>
                </div>
                <div className="flex flex-col p-8 space-y-4 rounded-md shadow shadow-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-white/80">👨‍💻</div>
                    <p className="text-xl">
                        <b>People-oriented.</b> I love working with others and sharing my passion for technology 💬, and I'm always happy to lend a hand and make a positive impact 🙌.
                    </p>
                </div>
            </div>
            </EntranceAnimation>
        </div>
    </section>
  )
}

export default AboutMe;