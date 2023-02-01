import { useState } from 'react'
import Header from './components/header.component'
import Title from './components/title-component'
import Projects from './components/projects.components'


function App() {

  return (
    <div className=' lg:w-2/3 lg:mx-auto lg:max-w-screen gap-3 lg:p-5 m-2 rounded-xl text-white'>
      <Header />
      <Title />
      <Projects />
    </div>
  )
}

export default App
