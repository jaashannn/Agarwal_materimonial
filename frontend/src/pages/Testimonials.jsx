import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHeart, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      id: 1,
      name: "Jessica & David",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
      quote: "We found each other on Love Forever and instantly connected. Now we're happily married for 2 years!",
      location: "New York, USA",
      rating: 5
    },
    {
      id: 2,
      name: "Priya & Rahul",
      image: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg",
      quote: "The matchmaking algorithm really works! We share so many common interests and values.",
      location: "Mumbai, India",
      rating: 5
    },
    {
      id: 3,
      name: "Sophie & Thomas",
      image: "https://images.pexels.com/photos/1405528/pexels-photo-1405528.jpeg",
      quote: "Thank you Love Forever for helping us find true love. Our wedding is in three months!",
      location: "Paris, France",
      rating: 5
    }
  ]

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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
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
            Love Stories
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Read heartwarming testimonials from couples who found their soulmates through our platform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="glass-card p-6 rounded-2xl relative"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(255, 182, 193, 0.3)"
              }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
                  <FaHeart className="text-white text-lg" />
                </div>
              </div>

              <div className="pt-8">
                <div className="w-32 h-32 mx-auto mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-playfair font-bold text-primary-900 mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{testimonial.location}</p>
                </div>

                <div className="relative">
                  <FaQuoteLeft className="absolute top-0 left-0 text-primary-200 text-xl" />
                  <p className="text-gray-700 text-center px-8 py-4">
                    {testimonial.quote}
                  </p>
                  <FaQuoteRight className="absolute bottom-0 right-0 text-primary-200 text-xl" />
                </div>

                <div className="flex justify-center mt-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <FaHeart
                      key={index}
                      className="text-primary-500 mx-0.5"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-playfair font-bold text-primary-900 mb-4">
            Ready to Write Your Own Love Story?
          </h2>
          <motion.button
            className="button-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Journey</span>
            <FaHeart />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Testimonials