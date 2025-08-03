import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Article from "./components/Article"
import Table from "./components/Table"
import Aside from "./components/Aside"
import Footer from "./components/Footer"
import Content from "./components/Content"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <div className=' container flex flex-col md:flex-row p-4'>
        <div className='flex-1'>
          <Article />
          <Table />
        </div>
        <Aside />
      </div>
      <Content />
      <Footer />
    </>
  )
}

export default App
