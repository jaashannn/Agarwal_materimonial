import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaPaperPlane, FaUser } from 'react-icons/fa'
import { GiLoveLetter, GiHeartWings } from 'react-icons/gi'
import { toast } from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6
      }
    }
  }

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

  const heartPulse = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity
      }
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      details: "support@cosmicmatch.com",
      action: "mailto:support@cosmicmatch.com",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      color: "from-blue-500 to-teal-400"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      details: "123 Cosmic Lane, Love City, LC 12345",
      action: "#",
      color: "from-red-500 to-pink-500"
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
          <motion.div
            className="flex justify-center mb-6"
            variants={floatingVariants}
            animate="float"
          >
            <GiLoveLetter className="text-5xl text-pink-500" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            whileHover={{ scale: 1.01 }}
          >
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Connect With Us
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Have questions about finding your soulmate? We're here to help you on your cosmic journey to love.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.action}
              className="relative group"
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -10 }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300`} />
              
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center">
                <motion.div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 ${info.color.replace('to', 'to')} bg-gradient-to-br shadow-md`}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {info.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {info.details}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
            whileHover={{ 
              boxShadow: "0 20px 40px rgba(255, 182, 193, 0.2)"
            }}
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-pink-400/10 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity
              }}
            />
            
            <motion.h2 
              className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3"
              whileHover={{ scale: 1.01 }}
            >
              <GiHeartWings className="text-pink-500" />
              <span>Send Us a Message</span>
              <GiHeartWings className="text-pink-500" />
            </motion.h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 py-3"
                    placeholder="Your full name"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 py-3"
                    placeholder="your@email.com"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 py-3"
                  placeholder="How can we help?"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 py-3"
                  placeholder="Your loving message..."
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <span className="mr-2">Send Message</span>
                      <motion.div
                        animate={{ 
                          x: [0, 5, 0],
                          rotate: [0, 10, 0]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity 
                        }}
                      >
                        <FaPaperPlane />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact