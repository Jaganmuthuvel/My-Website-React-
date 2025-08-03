import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='bg-gray-100 px-5 py-6 text-center'>
        <img className='w-96 mx-auto' src="https://media.licdn.com/dms/image/v2/D4D12AQFaWGftLhOWxA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705670025336?e=2147483647&v=beta&t=ejEITSc56upr4SX9ie9rx0y58YV44Uy5I_-ETlexVrA" alt="" />
        <h2 className='text-3xl font-semibold mt-2'>🎨 Build Amazing UIs with React & Vite</h2>
        <p className='text-gray-500 mt-2'>Fast, lightweight, and modern frontend development.</p>
        <button className='px-10 py-3 bg-blue-400 mt-2 rounded-2xl hover:bg-blue-500'>Get Started</button>
    </div>
    </>
  )
}

export default Hero