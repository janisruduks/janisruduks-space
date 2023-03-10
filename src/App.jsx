import React from 'react';

import Title from './components/title-component';
import Projects from './components/projects.components';
import EntranceAnimation from './components/Animation.component';
import AboutMe from './components/about-me.component';

function App() {

  return (
    <div className='lg:w-2/3 lg:mx-auto lg:max-w-screen gap-3 lg:p-5 m-2 rounded-xl text-white'>
      <EntranceAnimation>
        <Title />
        <AboutMe />
        <Projects />
      </EntranceAnimation>
    </div>
  );
}

export default App;