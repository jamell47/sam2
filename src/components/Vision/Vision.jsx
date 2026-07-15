import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading/SectionHeading'
import { VISION } from '../../data/content'
import './Vision.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export default function Vision() {
  return (
    <section className="section vision">
      <div className="container">
        <SectionHeading
          eyebrow="Future Vision"
          title="The roadmap to"
          accent="2030 and beyond"
          subtitle="Our long-term bet on an intelligent, connected and self-reliant African continent."
          align="center"
        />

        <motion.div
          className="vision__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {VISION.map((v) => (
            <motion.div
              key={v.title}
              className="vision__card glass"
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="vision__icon">
                <v.icon />
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
              <span className="vision__beam" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
