import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaBell, FaUser, FaSignOutAlt } from 'react-icons/fa'

const AdminHeader = ({ sidebarOpen, setSidebarOpen, onLogout }) => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const notifications = [
    { id: 1, message: "New user registered", time: "2 minutes ago" },
    { id: 2, message: "5 profiles awaiting verification", time: "1 hour ago" },
    { id: 3, message: "System update scheduled", time: "Yesterday" },
  ]

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Left side - menu toggle */}
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md text-gray-600 hover:text-primary-500 hover:bg-primary-50 lg:hidden"
          >
            <FaBars className="h-5 w-5" />
          </button>
          <h1 className="ml-4 text-lg font-playfair font-semibold text-primary-900">
            Admin Dashboard
          </h1>
        </div>

        {/* Right side - notifications and user menu */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications)
                if (showUserMenu) setShowUserMenu(false)
              }}
              className="p-2 rounded-full text-gray-600 hover:text-primary-500 hover:bg-primary-50 relative"
            >
              <FaBell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-primary-500"></span>
            </button>

            {/* Notifications dropdown */}
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50"
              >
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                </div>
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                  >
                    <p className="text-sm text-gray-800">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                ))}
                <div className="px-4 py-2 border-t border-gray-100 text-center">
                  <button className="text-xs text-primary-600 hover:text-primary-800 font-medium">
                    View all notifications
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* User menu */}
          <div className="relative">
            <button
              onClick={() => {
                setShowUserMenu(!showUserMenu)
                if (showNotifications) setShowNotifications(false)
              }}
              className="flex items-center text-gray-600 hover:text-primary-500 focus:outline-none"
            >
              <div className="h-8 w-8 rounded-full bg-primary-500 text-white flex items-center justify-center">
                <FaUser className="h-4 w-4" />
              </div>
              <span className="ml-2 text-sm font-medium hidden lg:block">Admin User</span>
            </button>

            {/* User dropdown */}
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
              >
                <button
                  onClick={onLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                >
                  <FaSignOutAlt className="h-4 w-4 mr-2 text-gray-500" />
                  Sign out
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader