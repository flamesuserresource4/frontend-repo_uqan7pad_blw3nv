import { motion } from 'framer-motion'

export default function CTA(){
  return (
    <section id="build" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 p-10 text-white"
        >
          <h3 className="text-3xl font-bold">Design your dream build</h3>
          <p className="mt-2 text-white/80 max-w-2xl mx-auto">Tell us how you fly – freestyle, racing, or cinematic – and we’ll recommend frames, motors, and a tuned stack to match.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="px-5 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition">Start a build</a>
            <a href="#support" className="px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5 transition">Chat with a pilot</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
