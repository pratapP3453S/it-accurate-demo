import { useState } from 'react'
import Home from './pages/Home'
import SocialSidebar from './components/SocialMedia'

function App() {

  return (
    <>
    <Home />
      <div className="mb-[100px] sm:mb-0">
        <SocialSidebar />
      </div>
    </>
  )
}

export default App
