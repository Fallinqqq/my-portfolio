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
      <div className="min-h-screen text-text-primary w-full overflow-x-hidden relative flex flex-col">
        {/* Aurora Dream Corner Whispers Background with Animation */}
        <div 
          className="absolute inset-0 -z-10 h-full w-full bg-animation"
          style={{
            background: `
              radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
              radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
              radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
              radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
              linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
            `
          }}
        />
        
        {/* Navigation - Sticky header with modern glassmorphism effect */}
        <Navbar />
        
        {/* Main content area with animated page transitions */}
        <main className="pt-16 w-full flex justify-center flex-grow">
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
