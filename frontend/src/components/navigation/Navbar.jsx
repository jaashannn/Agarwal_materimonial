import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaBars, FaTimes, FaSignOutAlt, FaSearch, FaUserAstronaut } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

const Navbar = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const isScrolled = scrollY > 50;

  const navLinks = [
    { name: 'Home', path: '/', icon: <IoSparkles /> },
    ...(isLoggedIn ? [
      { name: 'Profiles', path: '/profiles', icon: <FaUserAstronaut /> },
      { name: 'Matchmaking', path: '/matchmaking', icon: <FaHeart /> },
    ] : []),
    { name: 'Testimonials', path: '/testimonials', icon: <FaSearch /> },
    { name: 'About Us', path: '/about', icon: <IoSparkles /> },
    { name: 'FAQ', path: '/faq', icon: <FaSearch /> },
    { name: 'Contact', path: '/contact', icon: <FaUserAstronaut /> },
  ];

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: { 
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1]
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1]
      },
    },
  };

  const floatingHeartVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const backgroundDotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0.5,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with floating animation */}
          <motion.div
            className="flex items-center"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link to="/" className="flex items-center gap-2 relative">
              <motion.div
                variants={floatingHeartVariants}
                initial="initial"
                animate="animate"
                className="absolute -left-1 -top-1"
              >
                <FaHeart className="text-xs text-pink-400/50" />
              </motion.div>
              <motion.div
                variants={floatingHeartVariants}
                initial="initial"
                animate="animate"
                className="absolute -left-2 -top-2"
              >
                <FaHeart className="text-xs text-pink-400/30" />
              </motion.div>
              <FaHeart className="text-2xl text-pink-400 drop-shadow-lg" />
              <span className="text-xl md:text-2xl font-bold text-white font-montserrat tracking-wider">
                CosmicMatch
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation with hover effects */}
          <motion.nav 
            className="hidden md:flex space-x-1 relative"
            variants={navVariants}
            onHoverEnd={() => setHoveredItem(null)}
          >
            {navLinks.map((link, index) => (
              <motion.div 
                key={link.path} 
                variants={itemVariants}
                onHoverStart={() => setHoveredItem(index)}
                className="relative"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'bg-pink-500/20 text-pink-400'
                        : 'text-gray-300 hover:text-pink-300'
                    }`
                  }
                >
                  <span className="text-xs">{link.icon}</span>
                  {link.name}
                </NavLink>
                
                {/* Animated underline */}
                {hoveredItem === index && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400"
                    layoutId="navUnderline"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.nav>

          {/* Auth Button with particle effect */}
          <motion.div variants={itemVariants}>
            {isLoggedIn ? (
              <motion.button
                onClick={handleLogout}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-pink-500/30 transition-all"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(236, 72, 153, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Logout</span>
                <motion.div
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <FaSignOutAlt />
                </motion.div>
              </motion.button>
            ) : (
              <Link 
                to="/register" 
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-pink-500/30 transition-all"
              >
                <motion.span
                  animate={{ 
                    textShadow: ["0 0 0px #fff", "0 0 5px #fff", "0 0 0px #fff"],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity 
                  }}
                >
                  Find Love
                </motion.span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity 
                  }}
                >
                  <FaHeart />
                </motion.div>
              </Link>
            )}
          </motion.div>

          {/* Mobile Menu Button with animated bars */}
          <motion.button
            className="md:hidden text-2xl focus:outline-none relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <motion.div
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <FaTimes className="text-pink-400" />
              </motion.div>
            ) : (
              <motion.div
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaBars className="text-pink-400" />
              </motion.div>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation with floating dots background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-gray-900 backdrop-blur-lg"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            {/* Floating dots background */}
            <motion.div 
              className="absolute inset-0 overflow-hidden"
              variants={backgroundVariants}
              initial="hidden"
              animate="visible"
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-pink-400/20"
                  style={{
                    width: Math.random() * 10 + 5 + 'px',
                    height: Math.random() * 10 + 5 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                  }}
                  variants={backgroundDotVariants}
                />
              ))}
            </motion.div>

            <div className="flex flex-col h-full pt-24 px-6 relative z-10">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    whileHover={{ x: 5 }}
                    whileTap={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `px-6 py-4 rounded-xl text-lg font-medium flex items-center gap-3 ${
                          isActive 
                            ? 'bg-pink-500/30 text-white border-l-4 border-pink-400' 
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`
                      }
                    >
                      <span className="text-pink-400">{link.icon}</span>
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                {isLoggedIn ? (
                  <motion.button
                    onClick={handleLogout}
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Logout</span>
                    <FaSignOutAlt />
                  </motion.button>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/register"
                      className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-3"
                    >
                      <span>Find Your Match</span>
                      <FaHeart />
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;