import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-4xl font-bold text-white'>Somali <span className='text-yellow-400'>Quotes</span></h1>

     </div>
    </header>
  )
}

export default Header
