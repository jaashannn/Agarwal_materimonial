import { motion } from 'framer-motion'
import { FaHeart, FaUsers, FaLock, FaCheck } from 'react-icons/fa'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const stats = [
    { icon: <FaUsers />, value: "1M+", label: "Active Users" },
    { icon: <FaHeart />, value: "500K+", label: "Successful Matches" },
    { icon: <FaLock />, value: "100%", label: "Secure & Private" },
    { icon: <FaCheck />, value: "24/7", label: "Support" }
  ]

  const values = [
    {
      title: "Authentic Connections",
      description: "We believe in fostering genuine relationships based on compatibility and shared values."
    },
    {
      title: "Privacy First",
      description: "Your privacy and security are our top priorities. We implement the highest standards of data protection."
    },
    {
      title: "Inclusive Community",
      description: "We celebrate love in all its forms and welcome everyone seeking meaningful relationships."
    },
    {
      title: "Innovation & Care",
      description: "Our platform combines cutting-edge technology with a human touch to create perfect matches."
    }
  ]

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-ivory via-peach/20 to-ivory py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-4">
            About Love Forever
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're dedicated to helping people find their soulmates and create lasting relationships 
            built on love, trust, and understanding.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-primary-500 text-2xl mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Story */}
        <motion.div 
          className="glass-card p-8 mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-playfair font-bold text-primary-900 mb-6 text-center">
            Our Story
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Love Forever was founded with a simple yet powerful mission: to help people find 
              their perfect match in an increasingly disconnected world. We understand that 
              finding true love isn't just about algorithms and data – it's about creating 
              opportunities for genuine connections to flourish.
            </p>
            <p>
              Our platform combines cutting-edge technology with a deep understanding of human 
              relationships. We've helped thousands of couples find love, leading to countless 
              successful marriages and lasting relationships. Every day, we're inspired by the 
              beautiful love stories that begin on our platform.
            </p>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div variants={containerVariants}>
          <h2 className="text-3xl font-playfair font-bold text-primary-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="glass-card p-6"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(255, 182, 193, 0.3)"
                }}
              >
                <h3 className="text-xl font-playfair font-bold text-primary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-playfair font-bold text-primary-900 mb-4">
            Ready to Find Your Soulmate?
          </h2>
          <motion.button
            className="button-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Join Love Forever</span>
            <FaHeart />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About