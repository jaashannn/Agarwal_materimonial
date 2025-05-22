import React from 'react'
import { motion } from 'framer-motion'

const Profiles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile content will go here */}
        <p className="text-center col-span-full text-gray-600">
          Profile listings coming soon...
        </p>
      </div>
    </motion.div>
  )
}

export default Profiles