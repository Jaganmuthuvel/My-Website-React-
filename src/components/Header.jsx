import React from 'react'

const Header = () => {
  return (
    <>



      {/* <header className='bg-cover' style={{
        backgroundImage: "url('https://wallpapers.com/images/hd/programmer-coding-minimalist-a7tuk0n7bwgz0a95.webp')",
        backgroundPosition: "center",
        height: "800px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    
      
      }}>
        <h2 className='bg-black/40 px-4 py-4 text-white font-semibold text-4xl backdrop-blur-sm rounded-md'>🚀 Welcome to My Website</h2>
      </header> */}
      <header
  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-screen flex flex-col justify-center items-center relative"
>
  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
  <div className="z-10 text-center">
    <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
      🚀 Welcome to <span className="text-yellow-300">MyWebsite</span>
    </h1>
    <p className="text-lg mb-6">Code. Build. Launch. Repeat.</p>
    <button className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded-lg shadow hover:scale-105 transition">
      Explore Now
    </button>
  </div>
</header>



    </>
  )
}

export default Header