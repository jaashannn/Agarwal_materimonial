import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaUserCheck, FaUserTimes, FaTrash } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

const Users = () => {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  useEffect(() => {
    // Simulate API call to fetch users
    const timer = setTimeout(() => {
      const mockUsers = Array.from({ length: 50 }).map((_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        email: `user${index + 1}@example.com`,
        registrationDate: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
        verified: Math.random() > 0.3, // 70% chance of being verified
      }))
      
      setUsers(mockUsers)
      setFilteredUsers(mockUsers)
      setIsLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  // Apply filters when users, searchTerm, or statusFilter changes
  useEffect(() => {
    if (users.length === 0) return
    
    let result = [...users]
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      const isVerified = statusFilter === 'verified'
      result = result.filter(user => user.verified === isVerified)
    }
    
    setFilteredUsers(result)
  }, [users, searchTerm, statusFilter])

  const handleVerify = (userId, currentStatus) => {
    // In a real app, this would be an API call
    setUsers(prev => 
      prev.map(user => 
        user.id === userId ? { ...user, verified: !currentStatus } : user
      )
    )
    
    toast.success(`User ${currentStatus ? 'unverified' : 'verified'} successfully`)
  }

  const handleDelete = (userId) => {
    // In a real app, this would be an API call
    setUsers(prev => prev.filter(user => user.id !== userId))
    toast.success('User deleted successfully')
  }

  const counts = useMemo(() => {
    return {
      total: users.length,
      verified: users.filter(user => user.verified).length,
      unverified: users.filter(user => !user.verified).length
    }
  }, [users])

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <motion.div 
      className="py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-2xl font-playfair font-bold text-gray-900">Users</h1>
        <p className="mt-1 text-sm text-gray-600">Manage all registered users</p>
      </motion.div>
      
      {/* Filters and Search */}
      <motion.div
        className="mt-6 bg-white rounded-lg shadow p-4"
        variants={itemVariants}
      >
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search users..."
              className="input-field pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="w-full sm:w-48">
            <select
              className="input-field"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Users</option>
              <option value="verified">Verified Only</option>
              <option value="unverified">Unverified Only</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-4 text-sm">
            <span className="text-gray-700">Total: <span className="font-medium">{counts.total}</span></span>
            <span className="text-green-600">Verified: <span className="font-medium">{counts.verified}</span></span>
            <span className="text-yellow-600">Unverified: <span className="font-medium">{counts.unverified}</span></span>
          </div>
        </div>
      </motion.div>
      
      {/* Users Table */}
      <motion.div
        className="mt-6 bg-white rounded-lg shadow overflow-hidden"
        variants={itemVariants}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Registration Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <motion.tr 
                    key={user.id}
                    whileHover={{ backgroundColor: "#f9fafb" }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                          {user.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(user.registrationDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.verified 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {user.verified ? 'Verified' : 'Unverified'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-3">
                        <motion.button
                          onClick={() => handleVerify(user.id, user.verified)}
                          className={`p-1.5 rounded-md ${
                            user.verified 
                              ? 'text-yellow-600 hover:bg-yellow-100' 
                              : 'text-green-600 hover:bg-green-100'
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {user.verified ? <FaUserTimes /> : <FaUserCheck />}
                        </motion.button>
                        <motion.button
                          onClick={() => handleDelete(user.id)}
                          className="p-1.5 rounded-md text-red-600 hover:bg-red-100"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaTrash />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                    No users found matching your search criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Users