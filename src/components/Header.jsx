import {
    Bell,
    Home,
    LogOut,
    MessageCircle,
    Search,
    Settings,
    User,
    Users
} from 'lucide-react'
import React, { useState } from 'react'

function Header() {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-fb-border z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Search */}
          <div className="flex items-center space-x-4">
            {/* BUDICONNECT Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-fb-orange rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-fb-orange font-bold text-2xl">JOBCONNECT</span>
            </div>

            {/* Search Bar */}
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-fb-text-secondary" />
              </div>
              <input
                type="text"
                placeholder="Search Jobs & Companies"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-80 pl-10 pr-4 py-2 bg-fb-gray-50 border border-fb-border rounded-full text-fb-base focus:outline-none focus:bg-white focus:border-fb-orange focus:ring-1 focus:ring-fb-orange"
              />
            </div>
          </div>

          {/* Center - Navigation Icons */}
          <div className="flex items-center space-x-1">
            <button className="flex-1 px-4 py-2 rounded-fb fb-hover">
              <Home className="h-6 w-6 text-fb-orange" />
            </button>
            <button className="flex-1 px-4 py-2 rounded-fb fb-hover">
              <Users className="h-6 w-6 text-fb-text-secondary" />
            </button>
            <button className="flex-1 px-4 py-2 rounded-fb fb-hover">
              <MessageCircle className="h-6 w-6 text-fb-text-secondary" />
            </button>
          </div>

          {/* Right side - Profile and Notifications */}
          <div className="flex items-center space-x-2">
            {/* Notifications */}
            <button className="relative p-2 rounded-full bg-fb-gray-100 hover:bg-fb-gray-200 transition-colors">
              <Bell className="h-5 w-5 text-fb-text" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-fb-orange text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-fb-gray-100 transition-colors"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-fb shadow-fb-lg border border-fb-border py-2 z-50">
                  <button className="w-full px-4 py-2 text-left text-fb-base hover:bg-fb-gray-50 flex items-center space-x-3">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </button>
                  <button className="w-full px-4 py-2 text-left text-fb-base hover:bg-fb-gray-50 flex items-center space-x-3">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </button>
                  <hr className="my-2 border-fb-border" />
                  <button className="w-full px-4 py-2 text-left text-fb-base hover:bg-fb-gray-50 flex items-center space-x-3">
                    <LogOut className="h-4 w-4" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
