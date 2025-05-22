import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUserFriends, FaLock, FaHeart, FaMobileAlt, FaShieldAlt, FaBrain, FaBell } from 'react-icons/fa'
import { GiLovers } from 'react-icons/gi'
import { IoMdRocket } from 'react-icons/io'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <FaBrain className="text-2xl" />,
      title: "AI-Powered Matching",
      description: "Our advanced algorithm analyzes 29 dimensions of compatibility to find your perfect match.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Military-Grade Security",
      description: "End-to-end encryption and biometric authentication protect your data and privacy.",
      color: "from-blue-500 to-teal-400"
    },
    {
      icon: <GiLovers className="text-2xl" />,
      title: "Proven Success",
      description: "Join thousands of couples who found lasting love through our matching system.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <IoMdRocket className="text-2xl" />,
      title: "Instant Connections",
      description: "Real-time notifications and lightning-fast messaging keep your conversations flowing.",
      color: "from-orange-500 to-yellow-400"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section 
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      ref={ref}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-400/10"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span 
            className="inline-block text-sm uppercase tracking-wider text-pink-500 font-semibold mb-4 px-4 py-2 rounded-full bg-pink-50"
            variants={itemVariants}
          >
            Why We Stand Out
          </motion.span>
          <motion.h2 
            className="mt-2 text-4xl md:text-5xl font-bold text-gray-900"
            variants={itemVariants}
          >
            Designed for <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Modern Love</span>
          </motion.h2>
          <motion.p 
            className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Our platform combines cutting-edge technology with deep understanding of human connection.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -15 }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300`} />
              
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <motion.div
                  className={`w-16 h-16 rounded-2xl mb-6 mx-auto flex items-center justify-center bg-gradient-to-br ${feature.color} text-white`}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-center flex-grow">
                  {feature.description}
                </p>
                
                <motion.div 
                  className="mt-6 w-8 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated decorative element */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-pink-400/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />
      </div>
    </section>
  )
}

export default Features