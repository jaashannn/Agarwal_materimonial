import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaHeart, FaArrowRight, FaUserFriends, FaGlobeAmericas, FaChartLine } from 'react-icons/fa'
import { GiLovers } from 'react-icons/gi'
import heroImage from '../../assets/images/hero-image.jpg'

const Hero = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 150])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 50])
  
  // Floating animation for decorative elements
  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  // Heart pulse animation
  const heartPulse = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  }

  return (
    <motion.section 
      ref={targetRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-900 to-pink-800"
      style={{ opacity, scale }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Floating hearts */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400/20"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingVariants}
            animate="float"
            transition={{
              duration: Math.random() * 5 + 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <FaHeart />
          </motion.div>
        ))}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-pink-800/50 to-pink-600/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            style={{ y: textY }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="inline-block">Find Your </span>
              <motion.span 
                className="text-pink-300 inline-block"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 10px rgba(255,182,193,0.8)",
                    "0 0 0px rgba(255,255,255,0)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              >
                Soulmate
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl text-white/90 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Our <span className="font-semibold text-pink-200">AI-powered</span> matchmaking 
              connects you with compatible partners based on deep personality analysis and shared values.
            </motion.p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/register" 
                  className="button-primary bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-pink-500/40 flex items-center gap-3 px-8 py-4 text-lg"
                >
                  <motion.span
                    variants={heartPulse}
                    animate="pulse"
                  >
                    <FaHeart />
                  </motion.span>
                  <span>Start Matching</span>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/profiles" 
                  className="button-outline border-2 border-white/50 text-white hover:bg-white/10 hover:border-white/80 shadow-lg flex items-center gap-3 px-8 py-4 text-lg"
                >
                  <span>Explore Profiles</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
            style={{ y }}
          >
            <div className="relative">
              {/* Floating card with glass morphism effect */}
              <motion.div 
                className="glass-card p-8 rounded-3xl max-w-md ml-auto backdrop-blur-lg border border-white/20 shadow-2xl"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3 
                  className="text-3xl font-bold text-white mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Why <span className="text-pink-300">Choose Us?</span>
                </motion.h3>
                
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { 
                      icon: <GiLovers className="text-3xl text-pink-400" />, 
                      number: "10K+", 
                      label: "Success Stories" 
                    },
                    { 
                      icon: <FaChartLine className="text-3xl text-pink-400" />, 
                      number: "95%", 
                      label: "Satisfaction" 
                    },
                    { 
                      icon: <FaUserFriends className="text-3xl text-pink-400" />, 
                      number: "1M+", 
                      label: "Members" 
                    },
                    { 
                      icon: <FaGlobeAmericas className="text-3xl text-pink-400" />, 
                      number: "150+", 
                      label: "Countries" 
                    }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-pink-400/30 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.15)",
                        boxShadow: "0 10px 25px rgba(236, 72, 153, 0.3)"
                      }}
                    >
                      <div className="flex justify-center mb-2">
                        {stat.icon}
                      </div>
                      <p className="text-2xl font-bold text-white">{stat.number}</p>
                      <p className="text-sm text-pink-100">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -left-10 -top-10 w-24 h-24 rounded-full bg-pink-500/20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              />
              <motion.div
                className="absolute -right-5 -bottom-5 w-16 h-16 rounded-full bg-purple-500/20 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
      >
        <motion.p 
          className="mb-3 text-sm tracking-wider"
          animate={{
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          SCROLL TO EXPLORE
        </motion.p>
        <motion.div 
          className="w-8 h-14 border-2 border-white/60 rounded-full flex justify-center relative"
          animate={{ 
            borderColor: ["rgba(255,255,255,0.6)", "rgba(236,72,153,0.8)", "rgba(255,255,255,0.6)"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        >
          <motion.div 
            className="w-2 h-2 bg-white rounded-full mt-3"
            animate={{ 
              y: [0, 20, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 1.8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero