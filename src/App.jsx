/**
 * Main App Component - Modern Portfolio for Grace Foster
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import Commvault from './pages/projects/Commvault'
import StevenFrancis from './pages/projects/StevenFrancis'
import UniversityOfLynchburg from './pages/projects/UniversityOfLynchburg'
import GregoryConsulting from './pages/projects/GregoryConsulting'
import WillowAndWord from './pages/projects/WillowAndWord'
import BookCoverRedesign from './pages/projects/BookCoverRedesign'
import WhimsyDeco from './pages/projects/WhimsyDeco'
import DreamBrewery from './pages/projects/DreamBrewery'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Small delay lets the page render before scrolling
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}
  
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full bg-surface text-ink overflow-x-hidden flex flex-col">
        <Navbar />
        <main className="pt-[130px] sm:pt-[150px] w-full flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Individual project pages */}
            <Route path="/projects/commvault" element={<Commvault />} />
            <Route path="/projects/steven-francis-fine-art" element={<StevenFrancis />} />
            <Route path="/projects/university-of-lynchburg" element={<UniversityOfLynchburg />} />
            <Route path="/projects/gregory-consulting" element={<GregoryConsulting />} />
            <Route path="/projects/willow-and-word" element={<WillowAndWord />} />
            <Route path="/projects/book-cover-redesign" element={<BookCoverRedesign />} />
            <Route path="/projects/whimsy-deco" element={<WhimsyDeco />} />
            <Route path="/projects/dream-brewery" element={<DreamBrewery />} />
            {/* Fallback: old numeric ID links still work */}
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
