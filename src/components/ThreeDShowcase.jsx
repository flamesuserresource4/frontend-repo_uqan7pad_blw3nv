import { useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

// Lightweight 3D hero using a public Spline scene.
// If the scene fails to load, we gracefully fall back to an image.
export default function ThreeDShowcase(){
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
      {!failed ? (
        <Spline
          scene="https://prod.spline.design/2m9K9I6QHhZfL0N3/scene.splinecode"
          onError={() => setFailed(true)}
        />
      ) : (
        <motion.img
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&w=1600&auto=format&fit=crop"
          alt="FPV Drone"
          className="w-full h-full object-cover opacity-90"
        />
      )}

      {/* floating badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-4 left-4 bg-slate-900/70 backdrop-blur rounded-xl px-4 py-2 border border-white/10 text-white text-xs"
      >
        Real‑time 3D preview
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-4 right-4 bg-slate-900/70 backdrop-blur rounded-xl px-4 py-2 border border-white/10 text-white text-xs"
      >
        Orbit • Pan • Zoom
      </motion.div>

      {/* glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-40 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
    </div>
  )
}
