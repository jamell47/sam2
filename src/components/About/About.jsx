import { motion } from 'framer-motion'
import { FaBullseye, FaEye, FaHeart, FaCode, FaRocket } from 'react-icons/fa'
import SectionHeading from '../SectionHeading/SectionHeading'
import { useInView } from '../../hooks/useInView'
import './About.css'

const STATS = [
  { icon: FaRocket, label: 'Samuel Thuita Muruthi Founder & Group CEO', desc: 'Advenware Holdings' },
  { icon: FaCode, label: '15+ Years', desc: 'Building software' },
  { icon: FaBullseye, label: 'Mission', desc: 'Empower Africa through tech' },
  { icon: FaHeart, label: 'People First', desc: 'Impact over ego' }
]

const TIMELINE = [
  { y: '2009', t: 'First line of code' },
  { y: '2014', t: 'First company' },
  { y: '2017', t: 'Advenware Holdings' },
  { y: '2024', t: 'School of Tech' }
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="About The CEO"
          title="A visionary engineering"
          accent="Africa’s future"
          subtitle="From a single computer to a continental technology ecosystem — a relentless pursuit of innovation, security and human potential."
        />

        <div className="about__grid">
          <motion.div
            className="about__bio glass"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              As <strong>Samuel Thuita Muruthi</strong> ,<strong>Founder &amp; Group CEO of Advenware Holdings</strong>, I lead a
              multidisciplinary ecosystem spanning artificial intelligence, cybersecurity,
              software engineering, education, e-commerce, gaming, enterprise systems and
              technology manufacturing.
            </p>
            <p>
              My leadership philosophy is simple: build with conviction, lead with integrity,
              and never stop learning. Every venture under the Advenware banner exists to
              move Africa forward — solving real problems at scale with world-class engineering.
            </p>
            <div className="about__pillars">
              <div className="about__pillar">
                <FaBullseye />
                <div>
                  <h4>Mission</h4>
                  <p>To engineer the digital infrastructure of a thriving African continent.</p>
                </div>
              </div>
              <div className="about__pillar">
                <FaEye />
                <div>
                  <h4>Vision</h4>
                  <p>A connected, intelligent and self-reliant African technology economy.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__stats"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="about__stat glass"
                whileHover={{ y: -6, boxShadow: 'var(--glow-blue)' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
              >
                <s.icon className="about__stat-icon" />
                <h3>{s.label}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="about__timeline-strip">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.y}
              className="about__strip-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i }}
            >
              <span className="about__strip-year">{t.y}</span>
              <span className="about__strip-text">{t.t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
