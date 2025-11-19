import Navbar from './components/Navbar'
import ExpandedHero from './components/ExpandedHero'
import BrandsMarquee from './components/BrandsMarquee'
import Features from './components/Features'
import ProductGrid from './components/ProductGrid'
import ProductsSection from './components/ProductsSection'
import CTA from './components/CTA'
import { useEffect } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  useEffect(() => {
    // seed demo products silently on first load
    fetch(`${API}/seed`, { method: 'POST' }).catch(() => {})
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <ExpandedHero />
      <BrandsMarquee />
      <Features />
      <ProductGrid />
      <ProductsSection />
      <CTA />

      <footer id="support" className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-white/70 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} FPV 24/7 • Fly more. Fix less.</p>
          <div className="flex items-center gap-4">
            <a href="/test" className="hover:text-white">System Status</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
