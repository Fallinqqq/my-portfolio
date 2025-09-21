/**
 * Main App Component - Modern Portfolio for Grace Foster
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { useEffect } from 'react'

function App() {
  // Scroll to top when routes change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Router>
      <div className="min-h-screen w-full bg-[#fefcff] text-text-primary overflow-x-hidden relative flex flex-col">
        {/* Dreamy Sky Pink Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
              radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
          }}
        />
        
        {/* Navigation - Sticky header with modern glassmorphism effect */}
        <Navbar />
        
        {/* Main content area with animated page transitions */}
        <main className="pt-16 w-full flex justify-center flex-grow relative z-10">
          <div className="flex flex-col w-full max-w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
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
