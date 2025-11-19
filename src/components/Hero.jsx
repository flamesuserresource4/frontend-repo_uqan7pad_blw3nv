import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 sm:pt-28">
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
              Custom-built drones and premium parts for pilots who fly non‑stop. Tuned, tested, and ready to rip.
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

          {/* Showcase card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&w=1600&auto=format&fit=crop"
                alt="FPV Drone"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-slate-900/80 backdrop-blur rounded-xl px-4 py-3 border border-white/10 text-white text-sm">
              Hand‑built • Flight tested • 2‑year support
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
