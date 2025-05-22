import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHome, FaUsers, FaCog, FaHeart } from 'react-icons/fa'

const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebarLinks = [
    { name: 'Dashboard', path: '/admin', icon: <FaHome /> },
    { name: 'Users', path: '/admin/users', icon: <FaUsers /> },
    { name: 'Settings', path: '/admin/settings', icon: <FaCog /> },
  ]

  const sidebarVariants = {
    open: {
      width: '16rem',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      width: '5rem',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  }

  return (
    <motion.aside
      className="bg-primary-900 text-white flex flex-col h-screen"
      animate={sidebarOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
    >
      {/* Logo */}
      <div className="p-4 flex items-center justify-center h-16 border-b border-primary-800">
        <FaHeart className="text-primary-300 text-2xl" />
        <AnimatePresence>
          {sidebarOpen && (
            <motion.span
              className="ml-2 font-playfair text-xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              Admin Panel
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className="flex-1 pt-6 px-2 overflow-y-auto">
        <ul className="space-y-2">
          {sidebarLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-700 text-white'
                      : 'text-primary-200 hover:bg-primary-800'
                  }`
                }
              >
                <span className="text-lg">{link.icon}</span>
                <AnimatePresence>
                  {sidebarOpen && (
                    <motion.span
                      className="ml-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-primary-800 p-4">
        <div className="flex items-center justify-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 bg-primary-800 rounded-lg hover:bg-primary-700 transition-colors duration-300"
          >
            {sidebarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.aside>
  )
}

export default AdminSidebar