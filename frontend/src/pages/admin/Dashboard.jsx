import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaUsers, FaUserCheck, FaUserClock, FaHeart } from 'react-icons/fa'

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    verifiedUsers: 0,
    unverifiedUsers: 0,
    recentMatches: 0
  })

  useEffect(() => {
    // Mock data loading
    const timer = setTimeout(() => {
      setStats({
        totalUsers: 1254,
        verifiedUsers: 876,
        unverifiedUsers: 378,
        recentMatches: 42
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

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
      transition: { duration: 0.4 }
    }
  }

  const statCards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: <FaUsers />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-500",
      borderColor: "border-blue-200"
    },
    {
      title: "Verified Users",
      value: stats.verifiedUsers,
      icon: <FaUserCheck />,
      bgColor: "bg-green-50",
      textColor: "text-green-500",
      borderColor: "border-green-200"
    },
    {
      title: "Pending Verification",
      value: stats.unverifiedUsers,
      icon: <FaUserClock />,
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-500",
      borderColor: "border-yellow-200"
    },
    {
      title: "Recent Matches",
      value: stats.recentMatches,
      icon: <FaHeart />,
      bgColor: "bg-primary-50",
      textColor: "text-primary-500",
      borderColor: "border-primary-200"
    }
  ]

  const recentUsers = [
    { id: 1, name: "Olivia Martinez", email: "olivia@example.com", date: "2 hours ago", status: "verified" },
    { id: 2, name: "James Wilson", email: "james@example.com", date: "5 hours ago", status: "pending" },
    { id: 3, name: "Sophia Lee", email: "sophia@example.com", date: "1 day ago", status: "verified" },
    { id: 4, name: "William Brown", email: "william@example.com", date: "2 days ago", status: "verified" },
    { id: 5, name: "Emma Johnson", email: "emma@example.com", date: "2 days ago", status: "pending" },
  ]

  return (
    <motion.div
      className="py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-playfair font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-600">An overview of the platform statistics</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
      >
        {statCards.map((stat, index) => (
          <motion.div
            key={index}
            className={`${stat.bgColor} border ${stat.borderColor} rounded-lg shadow-sm p-6`}
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 }
            }}
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${stat.bgColor} ${stat.textColor}`}>
                {stat.icon}
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className={`text-2xl font-bold ${stat.textColor}`}>
                  {stat.value.toLocaleString()}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Users */}
      <motion.div 
        className="mt-8 bg-white shadow rounded-lg overflow-hidden"
        variants={itemVariants}
      >
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent User Registrations</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentUsers.map((user) => (
            <motion.div 
              key={user.id} 
              className="px-6 py-4 flex items-center"
              whileHover={{ backgroundColor: "#f9fafb" }}
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                <p className="text-sm text-gray-500 truncate">{user.email}</p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <span 
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.status === 'verified' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {user.status === 'verified' ? 'Verified' : 'Pending'}
                </span>
              </div>
              <div className="ml-6 text-sm text-gray-500">
                {user.date}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
            View all users
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Dashboard