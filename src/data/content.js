import {
  FaBriefcase, FaGamepad, FaShoppingCart, FaGraduationCap, FaShieldAlt,
  FaMicrochip, FaLaptopCode, FaBrain, FaBuilding, FaHandshake, FaBolt,
  FaUsers, FaLightbulb, FaCompass, FaGlobe, FaCloud, FaLock, FaFlask
} from 'react-icons/fa'

export const CEO = {
  name: 'Advenware',
  fullName: 'The Visionary Founder',
  title: 'Founder & Group CEO',
  company: 'Advenware Holdings',
  tagline: 'Engineering Africa’s technological future.',
  email: 'samuelthuita@gmail.com',
  phone: '+254 711161754',
  office: 'Weiteithie House, Kiambu, Thika, Kenya'
}

export const ROLES = [
  'Founder', 'Innovator', 'Software Engineer', 'Entrepreneur',
  'Technology Visionary', 'AI Enthusiast', 'Cybersecurity Leader'
]

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'companies', label: 'Companies' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'news', label: 'News' },
  { id: 'contact', label: 'Contact' }
]

export const COMPANIES = [
  {
    name: 'Advenware Career Link',
    icon: FaBriefcase,
    color: '#1e90ff',
    desc: 'Employment platform connecting employers and job seekers across emerging markets with intelligent matching.',
    tech: ['React', 'Node.js', 'AI Matching', 'GraphQL']
  },
  {
    name: 'Advenware Simulation Vault',
    icon: FaGamepad,
    color: '#ff5ec4',
    desc: 'Gaming platform where users compete in eFootball tournaments and earn real rewards.',
    tech: ['Unity', 'WebGL', 'Solana', 'Real-time']
  },
  {
    name: 'Advenware Commerce Cart',
    icon: FaShoppingCart,
    color: '#38e8a0',
    desc: 'Modern online shopping platform engineered for speed, scale and frictionless checkout.',
    tech: ['Next.js', 'Stripe', 'Edge', 'Search']
  },
  {
    name: 'The Advenware School of Technologies',
    icon: FaGraduationCap,
    color: '#ffb547',
    desc: 'Technology education platform building the next generation of African engineers.',
    tech: ['LMS', 'Video', 'Mentorship', 'Certs'],
    courses: ['Software Engineering', 'Artificial Intelligence', 'Cybersecurity', 'Cloud Computing', 'Web Development', 'Mobile Development']
  },
  {
    name: 'Advenware Cyber Security Systems',
    icon: FaShieldAlt,
    color: '#ff4d4d',
    desc: 'Enterprise cybersecurity solutions protecting critical infrastructure across the continent.',
    tech: ['Threat Detection', 'SOC', 'Penetration Testing', 'Digital Forensics', 'Security Consulting']
  },
  {
    name: 'Advenware Tech Manufacturing Platform',
    icon: FaMicrochip,
    color: '#9b5cff',
    desc: 'Hardware innovation hub building the physical future — from silicon to smart devices.',
    tech: ['IoT', 'Embedded Systems', 'Robotics', 'Electronics', 'Smart Devices']
  },
  {
    name: 'Advenware Systems',
    icon: FaLaptopCode,
    color: '#4cc9ff',
    desc: 'Enterprise software development for the institutions shaping tomorrow.',
    tech: ['ERP', 'CRM', 'Hospital Systems', 'School Systems', 'Business Solutions']
  },
  {
    name: 'Advenware Artificial Intelligence',
    icon: FaBrain,
    color: '#00d4ff',
    desc: 'Pushing the frontier of machine intelligence with locally-built models and agents.',
    tech: ['Machine Learning', 'AI Agents', 'Automation', 'Computer Vision', 'LLMs', 'Predictive Analytics']
  },
  {
    name: 'Advenware Holdings',
    icon: FaBuilding,
    color: '#1e90ff',
    desc: 'Parent company overseeing all subsidiaries, capital, and the long-term vision of the ecosystem.',
    tech: ['Governance', 'Capital', 'Strategy', 'Ventures']
  }
]

export const VALUES = [
  { icon: FaLightbulb, title: 'Innovation', desc: 'We build what does not yet exist, constantly redefining what is possible.' },
  { icon: FaShieldAlt, title: 'Integrity', desc: 'Trust is the foundation of everything we engineer and every promise we keep.' },
  { icon: FaBolt, title: 'Excellence', desc: 'We hold ourselves to a global standard, never settling for ordinary.' },
  { icon: FaUsers, title: 'Teamwork', desc: 'Great ecosystems are built by teams who lift each other higher.' },
  { icon: FaCompass, title: 'Leadership', desc: 'We lead with vision, conviction and a sense of responsibility to Africa.' },
  { icon: FaGraduationCap, title: 'Continuous Learning', desc: 'The best engineers are perpetual students of their craft.' },
  { icon: FaHandshake, title: 'Customer First', desc: 'Every product decision begins and ends with the people we serve.' },
  { icon: FaGlobe, title: 'Impact', desc: 'Technology only matters when it improves real lives at scale.' }
]

export const ACHIEVEMENTS = [
  { value: 480, suffix: '+', label: 'Projects Delivered' },
  { value: 9, suffix: '', label: 'Companies Founded' },
  { value: 1200, suffix: '+', label: 'Clients Served' },
  { value: 18500, suffix: '+', label: 'Students Trained' },
  { value: 14, suffix: '', label: 'Countries Reached' },
  { value: 64, suffix: '', label: 'AI Models Built' },
  { value: 320, suffix: '+', label: 'Cybersecurity Audits' },
  { value: 210, suffix: '+', label: 'Applications Developed' }
]

export const TECH_STACK = [
  'React', 'Node.js', 'Python', 'Java', 'C#', 'C++', 'Docker', 'Kubernetes',
  'AWS', 'Azure', 'Google Cloud', 'TensorFlow', 'PyTorch', 'PostgreSQL',
  'MySQL', 'MongoDB', 'Linux', 'Git'
]

export const TIMELINE = [
  { year: '2009', title: 'Started Programming', desc: 'Wrote first lines of code and fell in love with building systems.' },
  { year: '2014', title: 'Founded First Company', desc: 'Launched an early software studio serving local businesses.' },
  { year: '2017', title: 'Launched Advenware Holdings', desc: 'Unified multiple ventures under one visionary technology group.' },
  { year: '2019', title: 'Built AI Division', desc: 'Formed a research team focused on African-first machine intelligence.' },
  { year: '2021', title: 'Started Cyber Security Division', desc: 'Began protecting enterprises against evolving digital threats.' },
  { year: '2022', title: 'Launched Commerce Cart', desc: 'Shipped a modern commerce engine for the continent.' },
  { year: '2023', title: 'Built Career Link', desc: 'Connected thousands of talents with meaningful opportunities.' },
  { year: '2024', title: 'Opened School of Technologies', desc: 'Launched a flagship academy for future engineers.' },
  { year: '2030', title: 'Future Vision', desc: 'A fully connected African tech ecosystem — AI, manufacturing and smart cities.' }
]

export const GALLERY = [
  { id: 1, title: 'AI Research Lab', category: 'Innovation', hue: 210 },
  { id: 2, title: 'Global Summit Keynote', category: 'Leadership', hue: 260 },
  { id: 3, title: 'Robotics Floor', category: 'Manufacturing', hue: 190 },
  { id: 4, title: 'Cyber War Room', category: 'Security', hue: 350 },
  { id: 5, title: 'Graduation Day', category: 'Education', hue: 40 },
  { id: 6, title: 'Data Center', category: 'Infrastructure', hue: 170 },
  { id: 7, title: 'Product Launch', category: 'Ventures', hue: 300 },
  { id: 8, title: 'Smart City Render', category: 'Vision', hue: 220 },
  { id: 9, title: 'Engineering Offsite', category: 'Culture', hue: 120 }
]

export const NEWS = [
  { date: '2025-06-12', tag: 'Press Release', title: 'Advenware Holdings raises strategic round to scale AI across Africa' },
  { date: '2025-05-02', tag: 'Award', title: 'Named “Technology Group of the Year” at the Africa Innovation Awards' },
  { date: '2025-03-18', tag: 'Innovation', title: 'Simulation Vault crosses 1M tournament players in its first year' },
  { date: '2025-02-09', tag: 'Announcement', title: 'School of Technologies opens second campus in Nairobi' },
  { date: '2025-01-20', tag: 'Security', title: 'Cyber Security Systems launches 24/7 continental SOC' },
  { date: '2024-12-05', tag: 'Vision', title: 'Roadmap unveiled: smart-city pilots across three nations' }
]

export const TESTIMONIALS = [
  { name: 'Amara Okeke', role: 'Partner, Global Ventures', text: 'One of the most ambitious technology leaders I have ever worked with. The Advenware ecosystem is building at a pace the world rarely sees.' },
  { name: 'David Mensah', role: 'Enterprise Client', text: 'Their systems transformed our operations. The cybersecurity team is world-class and the support is unmatched.' },
  { name: 'Fatima Bello', role: 'Graduate, School of Tech', text: 'I went from zero to deploying real applications in months. This academy changed my life and my career.' },
  { name: 'Lewis Cartwright', role: 'VP Engineering', text: 'Working alongside Advenware’s teams elevated our own engineering culture. Genuinely visionary leadership.' },
  { name: 'Ngozi Eze', role: 'Employee, AI Division', text: 'I have never been somewhere that empowers builders like this. The mission is real and the impact is tangible.' }
]

export const VISION = [
  { icon: FaBrain, title: 'African AI Revolution', desc: 'Locally-built models that understand African languages, markets and needs.' },
  { icon: FaMicrochip, title: 'Technology Manufacturing', desc: 'Designing and producing hardware on the continent, for the continent.' },
  { icon: FaGraduationCap, title: 'Digital Education', desc: 'A continent literate in code, cloud and AI by the next decade.' },
  { icon: FaGlobe, title: 'Global Expansion', desc: 'Bringing the Advenware standard to every emerging market.' },
  { icon: FaBuilding, title: 'Smart Cities', desc: 'Connected, intelligent urban systems built on our own infrastructure.' },
  { icon: FaCloud, title: 'Cloud Infrastructure', desc: 'Continental cloud that keeps African data at home.' },
  { icon: FaLock, title: 'Cyber Defense', desc: 'A sovereign shield protecting the digital sovereignty of nations.' },
  { icon: FaFlask, title: 'Innovation Labs', desc: 'Open labs where the next decade of breakthroughs is invented.' }
]

export const SOCIALS = [
  { label: 'WhatsApp', href: '#', handle: '+234 800 000 0000' },
  { label: 'LinkedIn', href: '#', handle: 'in/advenware' },
  { label: 'GitHub', href: '#', handle: 'advenware' },
  { label: 'Facebook', href: '#', handle: 'advenware' },
  { label: 'Instagram', href: '#', handle: '@advenware' },
  { label: 'YouTube', href: '#', handle: 'Advenware TV' },
  { label: 'X', href: '#', handle: '@advenware' }
]
