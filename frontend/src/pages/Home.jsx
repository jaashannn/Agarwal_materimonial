import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Features />
    </motion.div>
  )
}

export default Home