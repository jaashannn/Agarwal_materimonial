import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHeart, FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
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

  const socialLinks = [
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaPinterest />, url: "#" },
  ]

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Careers", path: "#" },
        { name: "Press", path: "#" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "#" },
        { name: "Dating Tips", path: "#" },
        { name: "Success Stories", path: "/testimonials" },
        { name: "FAQs", path: "/faq" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "#" },
        { name: "Terms of Service", path: "#" },
        { name: "Cookie Policy", path: "#" },
        { name: "Safety Tips", path: "#" },
      ]
    }
  ]

  return (
    <motion.footer
      className="bg-gradient-romantic text-primary-900 pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Link to="/" className="flex items-center gap-2">
              <FaHeart className="text-2xl text-primary-600" />
              <span className="text-2xl font-playfair font-bold text-primary-900">
                Love Forever
              </span>
            </Link>
            <p className="mt-4 text-primary-800 max-w-md">
              Love Forever is dedicated to helping singles find meaningful connections and lasting relationships. 
              Our platform uses advanced matchmaking to bring compatible hearts together.
            </p>
            
            {/* Social Media */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="text-primary-700 hover:text-primary-900 text-xl transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-lg font-bold font-playfair mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-primary-800 hover:text-primary-600 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div 
          className="h-px bg-primary-200 my-8"
          variants={itemVariants}
        ></motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center text-primary-800"
          variants={itemVariants}
        >
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Love Forever. All rights reserved.
          </p>
          <div className="flex items-center">
            <span>Made with</span>
            <FaHeart className="text-primary-500 mx-1 animate-pulse" />
            <span>for love seekers everywhere</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer