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
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-primary text-text-primary w-full overflow-x-hidden">
        {/* Navigation - Sticky header with modern glassmorphism effect */}
        <Navbar />
        
        {/* Main content area with animated page transitions */}
        <main className="pt-16 w-full flex justify-center">
          <div className="min-h-screen flex flex-col w-full max-w-full">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </div>
        </main>
        
        {/* Footer - Consistent across all pages */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
