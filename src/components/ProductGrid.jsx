import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ProductGrid(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/products?featured=true&limit=12`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="products" className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured gear</h2>
          <a href="#" className="text-cyan-300 hover:text-cyan-200 text-sm">View all</a>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({length:8}).map((_, i) => (
              <div key={i} className="aspect-[4/5] rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i*0.03 }}
                className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.images?.[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-4 text-white">
                  <div className="text-sm text-white/60">{p.category.replace('-', ' ')}</div>
                  <h3 className="font-semibold leading-tight">{p.title}</h3>
                  <div className="mt-1 font-bold">${'{'}p.price.toFixed(2){'}'}</div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
