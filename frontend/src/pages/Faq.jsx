import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaHeart } from 'react-icons/fa'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How does the matchmaking process work?",
      answer: "Our matchmaking process uses advanced algorithms that consider your preferences, interests, and values. We analyze multiple compatibility factors to suggest potential matches that are most likely to result in meaningful connections."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take your privacy very seriously. We use industry-standard encryption and security measures to protect your personal information. Your data is never shared with third parties without your explicit consent."
    },
    {
      question: "Can I hide my profile temporarily?",
      answer: "Yes, you can pause your profile visibility at any time through your account settings. This will hide your profile from search results while maintaining your account information and matches."
    },
    {
      question: "How do I verify my profile?",
      answer: "Profile verification involves submitting a government-issued ID and completing our verification process. This helps maintain the authenticity of our community and ensures a safe environment for all users."
    },
    {
      question: "What if I need help with my profile?",
      answer: "Our customer support team is available 24/7 to assist you with any profile-related questions. We also offer profile optimization tips and professional writing services to help you present your best self."
    },
    {
      question: "How can I cancel my subscription?",
      answer: "You can cancel your subscription at any time through your account settings. If you cancel, your premium features will remain active until the end of your current billing period."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-ivory via-peach/20 to-ivory py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-700">
            Find answers to common questions about Love Forever
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-card overflow-hidden"
              variants={itemVariants}
              whileHover={{ boxShadow: "0 10px 20px rgba(255, 182, 193, 0.2)" }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-playfair font-semibold text-primary-900">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary-500"
                >
                  <FaChevronDown />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-700">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Have Questions */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-playfair font-bold text-primary-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-700 mb-6">
            Our support team is here to help you find your perfect match
          </p>
          <motion.button
            className="button-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Support</span>
            <FaHeart />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Faq