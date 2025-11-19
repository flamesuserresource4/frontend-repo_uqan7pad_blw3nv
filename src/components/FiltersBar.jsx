import { useEffect, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function FiltersBar({ onChange }){
  const [categories, setCategories] = useState([])
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/products?limit=1`)
        const one = await res.json()
        // In absence of dedicated endpoint, derive category list from products (client-side)
        const resAll = await fetch(`${API}/products?limit=200`)
        const all = await resAll.json()
        const cats = Array.from(new Set(all.map(p => p.category))).sort()
        setCategories(cats)
      } catch {}
    }
    load()
  }, [])

  useEffect(() => {
    onChange?.({ query, category })
  }, [query, category])

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col md:flex-row md:items-center gap-3 text-white">
      <div className="flex items-center gap-2">
        <SlidersHorizontal className="w-4 h-4 text-white/70" />
        <span className="text-sm text-white/80">Filters</span>
      </div>
      <input
        value={query}
        onChange={e=>setQuery(e.target.value)}
        placeholder="Search products..."
        className="flex-1 bg-transparent border border-white/10 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500/40"
      />
      <select
        value={category}
        onChange={e=>setCategory(e.target.value)}
        className="bg-transparent border border-white/10 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500/40"
      >
        <option value="">All categories</option>
        {categories.map(c => (
          <option key={c} value={c}>{c.replace('-', ' ')}</option>
        ))}
      </select>
    </div>
  )
}
