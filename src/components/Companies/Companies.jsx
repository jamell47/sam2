import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from '../SectionHeading/SectionHeading'
import { COMPANIES } from '../../data/content'
import './Companies.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } }
}
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export default function Companies() {
  return (
    <section id="companies" className="section companies">
      <span id="ventures" className="section-anchor" />
      <div className="container">
        <SectionHeading
          eyebrow="The Ecosystem"
          title="Advenware Holdings"
          accent="ventures"
          subtitle="Nine interconnected companies building the full stack of Africa’s digital economy — from silicon to intelligence."
        />

        <motion.div
          className="companies__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {COMPANIES.map((c) => (
            <motion.article
              key={c.name}
              className="company-card glass"
              variants={item}
              whileHover={{ y: -10 }}
              data-cursor="hover"
              style={{ '--c': c.color }}
            >
              <div className="company-card__glow" />
              <div className="company-card__top">
                <div className="company-card__logo">
                  <c.icon />
                </div>
                <span className="company-card__tag">Advenware</span>
              </div>

              <h3 className="company-card__name">{c.name}</h3>
              <p className="company-card__desc">{c.desc}</p>

              <div className="company-card__tech">
                {c.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              {c.courses && (
                <div className="company-card__courses">
                  <span className="company-card__courses-label">Courses</span>
                  <div className="company-card__tech">
                    {c.courses.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              )}

              <button className="company-card__btn">
                Learn More <FiArrowUpRight />
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
