import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Header from './Header'
import Footer from './Footer'
import SomaliQuote from './SomaliQuote'

const root = document.getElementById("root")

createRoot(root).render(
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <SomaliQuote />
    </main>
    <Footer />
  </div>
)