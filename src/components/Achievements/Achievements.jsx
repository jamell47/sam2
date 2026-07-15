import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useInView'
import { formatNumber } from '../../hooks/useMousePosition'
import SectionHeading from '../SectionHeading/SectionHeading'
import { ACHIEVEMENTS } from '../../data/content'
import './Achievements.css'

function Counter({ value, suffix, label, start }) {
  const count = useCountUp(value, { duration: 2200, start })
  return (
    <div className="ach__item glass">
      <span className="ach__value">
        {formatNumber(count)}
        {suffix}
      </span>
      <span className="ach__label">{label}</span>
    </div>
  )
}

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.25 })

  return (
    <section id="achievements" className="section achievements" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="By The Numbers"
          title="Impact at"
          accent="continental scale"
          subtitle="Measurable outcomes from a decade of building products, companies and careers across Africa and beyond."
          align="center"
        />

        <motion.div
          className="ach__grid"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {ACHIEVEMENTS.map((a) => (
            <motion.div
              key={a.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <Counter value={a.value} suffix={a.suffix} label={a.label} start={inView} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
