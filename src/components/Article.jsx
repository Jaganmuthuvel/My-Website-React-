import React from 'react'

const Article = () => {
  return (
    <div className='p-12'>
        <h3 className='text-2xl font-semibold'>📰 Latest News</h3>
        <div className='flex items-center mt-2 shadow-xl p-4 rounded-2xl'>
            <img className='w-64 rounded-2xl' src="https://t3.ftcdn.net/jpg/02/51/12/84/360_F_251128433_m3EPEDXtlbtEQZCA86xRZkBMaRazBjRn.jpg" alt="" />
           <div className='ml-3'>
             <h3 className='text-lg'>🚀 Vite is Revolutionizing Frontend</h3>
            <p className='text-gray-400'>Vite is a next-gen frontend tool that delivers fast development.</p>
           </div>
        </div>
    </div>
  )
}

export default Article