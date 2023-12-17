import React, { useState } from 'react'

function Menu() {

   const [open, setOpen]= useState(false);

   const hadleopen = () => {
    setOpen(true);
   }
   const hadleclose = () => {
    setOpen(false);
   }


  return (
    <div className='text-white px-5 py-6 bg-pink-500 flex justify-between'>
      <h1 className='text-5xl font-bold'>Nooty</h1>
      
      <i style={{display:open ===true ?"none" : "" }}  onClick={hadleopen} class="fa-solid sm:hidden absolute-right-2 text-4xl  fa-bars"></i>


      <i onClick={hadleclose} style={{display :open ==true ? "block" : "" }} class="fa-solid hidden absolute right-2 text-4xl fa-xmark"></i>

 <ul style={{display : open === true ? "block" : ""}} className='hidden  sm:flex  sm:mt-0 sm:space-y-0 flex-col sm:flex-row  mt-16 space-y-6 sm:space-x-12 text-4xl'>

        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Pricing</li>
      </ul>
    </div>
  )
}

export default Menu
