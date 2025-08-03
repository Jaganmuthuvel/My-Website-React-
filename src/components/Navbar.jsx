import React from 'react'
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope
} from "react-icons/fa"
const navlink=[
    {
       name:"Home",
       icon:<FaHome/>,
       href:"#",
    },
     {
       name:"About",
       icon:<FaInfoCircle/>,
       href:"#",
    },
     {
       name:"Service",
       icon:<FaServicestack/>,
       href:"#",
    },
     {
       name:"Contact",
       icon:<FaEnvelope/>,
       href:"#",
    },
]

const Navbar = () => {
  return (
    <>
      <div className='bg-white text-black px-6 py-4'>
        <div className='flex justify-between'>
        <h1 className='text-3xl font-bold'>🚀 MyWebsite</h1>
    <div className='flex gap-6 items-center'>
      {
        navlink.map((navlink)=>
        (<ul className='hover:text-blue-500'>
        <li>
          <a href='{navlink.href}' className='flex items-center gap-2'>
            {navlink.icon}
            {navlink.name}
          </a>
            

        </li>
    </ul>))
    }
    </div>
    </div>
      </div>
    </>
  )
}

export default Navbar