import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaStar, FaUserFriends } from 'react-icons/fa'

const Matchmaking = () => {
  const [preferences, setPreferences] = useState({
    ageRange: [25, 35],
    location: '',
    interests: []
  })

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

  const matches = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      location: "New York",
      compatibility: 95,
      interests: ["Travel", "Photography", "Cooking"],
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 30,
      location: "San Francisco",
      compatibility: 92,
      interests: ["Hiking", "Music", "Technology"],
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      id: 3,
      name: "Emily Davis",
      age: 26,
      location: "Chicago",
      compatibility: 88,
      interests: ["Art", "Yoga", "Reading"],
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
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
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-4">
            Find Your Perfect Match
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our advanced matchmaking algorithm helps you find compatible partners 
            based on your preferences and personality.
          </p>
        </motion.div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {matches.map((match) => (
            <motion.div
              key={match.id}
              className="glass-card overflow-hidden rounded-2xl"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(255, 182, 193, 0.3)"
              }}
            >
              <div className="relative">
                <img 
                  src={match.image} 
                  alt={match.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{match.compatibility}%</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-primary-900">
                  {match.name}
                </h3>
                
                <div className="flex items-center mt-2 text-gray-600">
                  <FaUserFriends className="mr-2" />
                  <span>{match.age} • {match.location}</span>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Interests:</p>
                  <div className="flex flex-wrap gap-2">
                    {match.interests.map((interest, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="mt-6 w-full button-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Connect Now</span>
                  <FaHeart />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Matchmaking