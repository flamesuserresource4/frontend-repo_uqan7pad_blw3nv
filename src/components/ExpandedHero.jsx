import { motion } from 'framer-motion'
import ThreeDShowcase from './ThreeDShowcase'

export default function ExpandedHero(){
  return (
    <section className="relative overflow-hidden">
      {/* decorative gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-10 sm:pt-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              FPV 24/7
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-4 text-lg sm:text-xl text-slate-300 max-w-prose"
            >
              Custom‑built drones and premium parts for pilots who fly non‑stop. Tuned, tested, and ready to rip.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#products" className="px-5 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition">
                Shop Featured
              </a>
              <a href="#build" className="px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5 transition">
                Build Yours
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ThreeDShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
