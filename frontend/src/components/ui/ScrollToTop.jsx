import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const ScrollToTop = ({ scrollY }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {scrollY > 300 && (
        <motion.button
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 z-40"
          onClick={scrollToTop}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20
            }
          }}
          exit={{ 
            scale: 0, 
            opacity: 0,
            transition: { duration: 0.2 }
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 15px rgba(255, 105, 180, 0.7)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaHeart className="text-xl animate-pulse" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop