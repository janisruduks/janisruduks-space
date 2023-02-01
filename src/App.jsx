import { useState } from 'react'
import Header from './components/header.component'
import Title from './components/title-component'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' lg:w-2/3 lg:mx-auto lg:max-w-screen gap-3 lg:p-5 m-2 rounded-xl text-white'>
      <Header />
      <Title />
      <Title />
      <Title />
      <Title />
      <Title />
    </div>
  )
}

export default App
