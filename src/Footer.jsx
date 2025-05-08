import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-white border-t border-gray-200 mt-12'>
      <div className='container mx-auto px-6 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-6 md:mb-0 flex items-center'>
            <div>
              <h2 className='text-xl font-bold text-gray-800'>Somali <span className='text-blue-500'>Quotes</span></h2>
              <p className='mt-1 text-gray-600 text-sm'>Discover the wisdom of Somali proverbs</p>
            </div>
          </div>

          <div className='flex flex-col items-center md:items-end'>
            <div className='flex space-x-4 mb-4'>
              <a href="#" className='text-gray-600 hover:text-blue-500 transition-colors'>
                <i className='fa-brands fa-facebook text-xl'></i>
              </a>
              <a href="#" className='text-gray-600 hover:text-blue-500 transition-colors'>
                <i className='fa-brands fa-twitter text-xl'></i>
              </a>
              <a href="#" className='text-gray-600 hover:text-blue-500 transition-colors'>
                <i className='fa-brands fa-instagram text-xl'></i>
              </a>
            </div>
            <p className='text-sm text-gray-500'>© {currentYear} Somali Quotes. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
