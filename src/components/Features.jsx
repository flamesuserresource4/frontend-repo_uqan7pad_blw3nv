import { motion } from 'framer-motion'
import { Rocket, Sliders, Shield, Wrench } from 'lucide-react'

const items = [
  { icon: Rocket, title: 'Performance Tuned', text: 'Every build is tuned for smooth control, sharp response, and top speed.' },
  { icon: Sliders, title: 'Custom Options', text: 'Pick frames, motors, props, and electronics to match your flying style.' },
  { icon: Shield, title: 'Durable + Reliable', text: 'Crash‑resistant components and robust soldering withstand heavy sessions.' },
  { icon: Wrench, title: 'Pro Support', text: 'Build consultation, firmware updates, and repairs – we’ve got you covered.' },
]

export default function Features(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-white mb-8"
        >
          Why pilots choose FPV 24/7
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon, title, text}, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i*0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white"
            >
              <div className="h-10 w-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-white/70">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
