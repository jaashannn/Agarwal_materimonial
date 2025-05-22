import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import heartAnimation from '../../assets/animations/heart-animation.json'

const Loader = ({ fullScreen = false }) => {
  if (fullScreen) {
    return (
      <motion.div 
        className="fixed inset-0 bg-gradient-romantic flex flex-col items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          className="w-64 h-64"
        >
          <Lottie 
            animationData={heartAnimation} 
            loop={true} 
          />
        </motion.div>
        <motion.h1 
          className="text-3xl md:text-4xl font-playfair text-primary-900 mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Love Forever
        </motion.h1>
        <motion.p
          className="text-lg text-primary-700 mt-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Finding your soulmate...
        </motion.p>
      </motion.div>
    )
  }

  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-32 h-32">
        <Lottie 
          animationData={heartAnimation} 
          loop={true}
        />
      </div>
    </div>
  )
}

export default Loader