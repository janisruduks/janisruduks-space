import React, { useState, useEffect } from 'react';

import Header from './components/header.component';
import Title from './components/title-component';
import Projects from './components/projects.components';
import EntranceAnimation from './components/Animation.component';
import AboutMe from './components/about-me.component';

function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 3000);
  }, []);

  return (
    <div className='lg:w-2/3 lg:mx-auto lg:max-w-screen gap-3 lg:p-5 m-2 rounded-xl text-white'>
      {contentLoaded ? (
        <>
        <EntranceAnimation>
          <Header />
          <Title />
          <AboutMe />
          <Projects />
        </EntranceAnimation>
        </>
      ) : (
        <div className='flex justify-center items-center h-full'>
          <div className='loading'>
            <svg className='spinning-circle' viewBox='0 0 100 100'>
              <circle
                cx='50'
                cy='50'
                fill='none'
                stroke='#000000'
                strokeWidth='10'
                r='35'
                strokeDasharray='164.9336 143.9344'
                transform='rotate(295.654 50 50)'
              >
                <animateTransform
                  attributeName='transform'
                  type='rotate'
                  calcMode='linear'
                  values='0 50 50;360 50 50'
                  keyTimes='0;1'
                  dur='1s'
                  begin='0s'
                  repeatCount='indefinite'
                />
              </circle>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;