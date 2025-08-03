import React from 'react'
import {
  FaBook,
  FaReact,
  FaRocket,
} from "react-icons/fa"
const links=[
        {
            href:"https://vite.dev/",
            name:"Vite Documentation",
            icon:<FaBook/>,
        },
         {
            href:"https://react.dev/",
            name:"React",
            icon:<FaReact/>,
        },
         {
            href:"",
            name:"Frontend trend",
            icon:<FaRocket/>,
        },
    ]
const Aside = () => {
    
  return (
    <div className="bg-white/30 backdrop-blur-md shadow-2xl rounded-xl p-6 w-64">
        <h1 className='text-2xl font-semibold'>
            📌 Related Links

        </h1>
        <div className='p-4 space-y-2'>
            {
                links.map((links)=>(
                    <a href='{links.href}' className='flex items-center  gap-2 text-blue-800'>
                        {links.icon}{links.name}

                    </a>
                ))
            }
        </div>

    </div>
  )
}

export default Aside