import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-4xl font-bold hidden md:inline hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-400'>Parthiban K</div>
        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <button className='bg-gradient-to-r from-red-500 to-blue-400 text-black hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
      </div>
    </nav>
  )
}

export default Navbar