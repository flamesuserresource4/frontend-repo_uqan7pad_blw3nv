import { Menu, ShoppingCart, Search } from 'lucide-react'

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-white/5"><Menu className="w-5 h-5 text-white" /></button>
          <a href="/" className="text-white font-bold text-lg tracking-tight">FPV 24/7</a>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <input className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-3 py-2 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Search drones, parts, brands..." />
            <Search className="w-5 h-5 text-white/60 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#products" className="text-white/80 hover:text-white text-sm">Shop</a>
          <a href="#build" className="text-white/80 hover:text-white text-sm">Build</a>
          <a href="#support" className="text-white/80 hover:text-white text-sm">Support</a>
          <button className="relative p-2 rounded-lg hover:bg-white/5">
            <ShoppingCart className="w-5 h-5 text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] bg-cyan-500 text-white rounded-full px-1.5 py-0.5">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
