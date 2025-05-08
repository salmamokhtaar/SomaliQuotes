import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-white shadow-sm border-b border-gray-200'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo with blue text like in the image */}
        <div className='flex items-center'>
          <h1 className='text-2xl font-bold text-gray-800'>Somali <span className='text-blue-500'>Quotes</span></h1>
        </div>

      </div>

   
    </header>
  )
}

export default Header
