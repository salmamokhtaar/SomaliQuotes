import React from 'react' // 
import {createRoot} from 'react-dom/client'//
import './style.css'
import Header from './header'
import Footer from './footer'
import SomaliQuote from './SomaliQuote'

const root = document.getElementById("root")



createRoot(root).render(
<div>
  <Header />
  <SomaliQuote />
  <Footer />
  </div>
)