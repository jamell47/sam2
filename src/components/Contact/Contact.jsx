import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaPhone, FaEnvelope, FaLocationDot, FaWhatsapp, FaLinkedin,
  FaGithub, FaFacebook, FaInstagram, FaYoutube, FaXTwitter
} from 'react-icons/fa6'
import SectionHeading from '../SectionHeading/SectionHeading'
import { CEO, SOCIALS } from '../../data/content'
import './Contact.css'

const ICONS = {
  WhatsApp: FaWhatsapp,
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  X: FaXTwitter
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let’s build the"
          accent="future together"
          subtitle="Partnerships, press, investments or just a conversation about technology in Africa."
          align="center"
        />

        <div className="contact__grid">
          <motion.div
            className="contact__info glass"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="contact__info-title">{CEO.title}</h3>
            <p className="contact__info-sub">{CEO.company}</p>

            <ul className="contact__list">
              <li><FaPhone /> {CEO.phone}</li>
              <li><FaEnvelope /> {CEO.email}</li>
              <li><FaLocationDot /> {CEO.office}</li>
            </ul>

            <div className="contact__socials">
              {SOCIALS.map((s) => {
                const Icon = ICONS[s.label]
                return (
                  <a key={s.label} href={s.href} className="contact__social" aria-label={s.label} data-cursor="hover">
                    {Icon && <Icon />}
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass"
            onSubmit={submit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact__field">
              <input
                type="text"
                required
                placeholder=" "
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <label>Full Name</label>
            </div>
            <div className="contact__field">
              <input
                type="email"
                required
                placeholder=" "
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <label>Email Address</label>
            </div>
            <div className="contact__field">
              <textarea
                required
                rows="4"
                placeholder=" "
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <label>Your Message</label>
            </div>
            <button type="submit" className="contact__submit">
              {sent ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
