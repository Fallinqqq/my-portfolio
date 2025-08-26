/**
 * Main App Component - Modern Portfolio for Grace Foster
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { useEffect } from 'react'

function App() {
  // Scroll to top when routes change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Router>
      <div className="min-h-screen text-text-primary w-full overflow-x-hidden relative flex flex-col">
        {/* Background grid pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        
        {/* Navigation - Sticky header with modern glassmorphism effect */}
        <Navbar />
        
        {/* Main content area with animated page transitions */}
        <main className="pt-16 w-full flex justify-center flex-grow">
          <div className="flex flex-col w-full max-w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        
        {/* Footer - Consistent across all pages */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
