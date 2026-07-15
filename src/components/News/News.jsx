import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from '../SectionHeading/SectionHeading'
import { NEWS } from '../../data/content'
import './News.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export default function News() {
  return (
    <section id="news" className="section news">
      <div className="container">
        <SectionHeading
          eyebrow="Newsroom"
          title="Latest from"
          accent="Advenware"
          subtitle="Press releases, awards, product launches and the road ahead."
        />

        <motion.div
          className="news__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {NEWS.map((n) => (
            <motion.article key={n.title} className="news__card glass" variants={item} whileHover={{ y: -8 }}>
              <div className="news__top">
                <span className="news__tag">{n.tag}</span>
                <time className="news__date">{n.date}</time>
              </div>
              <h3 className="news__title">{n.title}</h3>
              <button className="news__link">
                Read more <FiArrowUpRight />
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
