import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gradient-to-r from-blue-600 to-blue-400 text-white mt-12'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-6 md:mb-0'>
            <h2 className='text-2xl font-bold'>Somali <span className='text-yellow-400'>Quotes</span></h2>
            <p className='mt-2 text-blue-100'>Discover the wisdom of Somali proverbs</p>
          </div>

          <div className='flex flex-col items-center md:items-end'>
            <div className='flex space-x-4 mb-4'>
              <a href="#" className='text-white hover:text-yellow-300 transition-colors'>
                <i className='fa-brands fa-facebook text-2xl'></i>
              </a>
              <a href="#" className='text-white hover:text-yellow-300 transition-colors'>
                <i className='fa-brands fa-twitter text-2xl'></i>
              </a>
              <a href="#" className='text-white hover:text-yellow-300 transition-colors'>
                <i className='fa-brands fa-instagram text-2xl'></i>
              </a>
            </div>
            <p className='text-sm text-blue-100'>© {currentYear} Somali Quotes. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
