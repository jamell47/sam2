import { motion } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'
import { useTyping } from '../../hooks/useTyping'
import { ROLES } from '../../data/content'
import ceoImg from '../../assets/ceo.jpg'
import './Hero.css'

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i }
  })
}

export default function Hero() {
  const role = useTyping(ROLES)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero__inner container">
        <motion.div
          className="hero__content glass"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1}
        >
          <span className="hero__eyebrow">Founder &amp; Group CEO</span>
          <h1 className="hero__name">
            ADVENWARE
            <span className="hero__name-sub">HOLDINGS</span>
          </h1>

          <div className="hero__typing">
            <span className="hero__typing-static">I am </span>
            <span className="hero__typing-text">{role}</span>
            <span className="hero__caret" />
          </div>

          <p className="hero__desc">
            Building Africa’s next technology giant — an ecosystem spanning AI,
            cybersecurity, software engineering, education and future manufacturing.
          </p>

          <div className="hero__actions">
            <button className="btn-primary" onClick={() => scrollTo('companies')}>
              Explore Ventures <FiArrowUpRight />
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('contact')}>
              Contact CEO
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <div className="hero__orb" />
          <div className="hero__avatar glass">
            <img className="hero__avatar-img" src={ceoImg} alt="Advenware — Founder & Group CEO" />
            <div className="hero__avatar-ring" />
            <div className="hero__avatar-core" />
          </div>
          <div className="hero__badge hero__badge--1">AI</div>
          <div className="hero__badge hero__badge--2">SEC</div>
          <div className="hero__badge hero__badge--3">CLOUD</div>
        </motion.div>
      </div>

      <motion.button
        className="hero__scroll"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll down"
      >
        <span className="hero__scroll-text">Scroll</span>
        <FiArrowDown className="hero__scroll-icon" />
      </motion.button>
    </section>
  )
}
