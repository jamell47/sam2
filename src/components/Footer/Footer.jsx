import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { NAV_LINKS, COMPANIES, SOCIALS } from '../../data/content'
import './Footer.css'

const ICONS = {
  WhatsApp: 'M', LinkedIn: 'in', GitHub: 'gh', Facebook: 'fb',
  Instagram: 'ig', YouTube: 'yt', X: 'X'
}

const SERVICES = ['Custom Software', 'AI & ML', 'Cybersecurity', 'Cloud & DevOps', 'Education', 'Hardware']

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const top = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const subscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3500)
  }

  return (
    <footer className="footer">
      <div className="footer__waves">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path className="wave wave1" d="M0,60 C240,120 480,0 720,40 C960,80 1200,120 1440,60 L1440,120 L0,120 Z" />
          <path className="wave wave2" d="M0,80 C240,40 480,120 720,70 C960,20 1200,60 1440,90 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <div className="container footer__inner">
        <div className="footer__col footer__brand">
          <button className="footer__logo" onClick={top}>
            <span className="footer__logo-mark">A</span> ADVENWARE
          </button>
          <p>Engineering Africa’s technological future through AI, security, education and innovation.</p>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="footer__social">{ICONS[s.label]}</a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.id}><button onClick={() => go(l.id)}>{l.label}</button></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Companies</h4>
          <ul>
            {COMPANIES.slice(0, 6).map((c) => (
              <li key={c.name}><button onClick={() => go('companies')}>{c.name.replace('Advenware ', '')}</button></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s}><button onClick={() => go('companies')}>{s}</button></li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__news">
          <h4>Newsletter</h4>
          <p>Get ecosystem updates, launches and insights.</p>
          <form onSubmit={subscribe}>
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">{subscribed ? 'Subscribed ✓' : 'Subscribe'}</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} Advenware Holdings. All rights reserved.</span>
        <button className="footer__top" onClick={top} aria-label="Back to top">
          Back to Top <FiArrowUp />
        </button>
      </div>
    </footer>
  )
}
