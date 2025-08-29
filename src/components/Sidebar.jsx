import {
    HelpCircle,
    Home,
    Settings,
    UserCheck,
    UserPlus,
    Users
} from 'lucide-react'
import React from 'react'

function Sidebar({ currentPage, onPageChange }) {
  const menuItems = [
    { icon: Home, label: '홈', page: 'home' },
    { icon: Users, label: 'Network', page: 'network' },
    { icon: Settings, label: '설정', page: 'settings' },
    { icon: HelpCircle, label: '도움말 및 지원', page: 'help' }
  ]

  // Network 추천 연결 데이터
  const recommendedConnections = [
    {
      name: '김dharma',
      position: 'UX Designer',
      company: 'Naver',
      mutualConnections: 8,
      isBuddhist: true,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      name: '이수행자',
      position: 'Frontend Dev',
      company: 'Kakao',
      mutualConnections: 5,
      isBuddhist: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    {
      name: '박개발자',
      position: 'Backend Engineer',
      company: 'Samsung',
      mutualConnections: 12,
      isBuddhist: false,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    }
  ]

  // 새로운 연결 요청 데이터
  const connectionRequests = [
    {
      name: '정명상가',
      position: 'Product Manager',
      company: 'Line',
      timeAgo: '2시간 전',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      name: '최불교도',
      position: 'Data Scientist',
      company: 'Coupang',
      timeAgo: '1일 전',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    }
  ]

  return (
    <aside className="w-80 p-4 space-y-6">
      {/* Main Menu */}
      <div className="space-y-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onPageChange(item.page)}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-fb text-left transition-colors ${
              currentPage === item.page
                ? 'bg-fb-orange bg-opacity-10 text-fb-orange'
                : 'text-fb-text hover:bg-fb-gray-100'
            }`}
          >
            <item.icon className={`h-5 w-5 ${currentPage === item.page ? 'text-fb-orange' : 'text-fb-text-secondary'}`} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>

            {/* 추천 연결 */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 px-3">
          <UserPlus className="h-4 w-4 text-blue-500" />
          <h3 className="text-fb-text-secondary font-semibold text-fb-sm">추천 연결</h3>
        </div>

        <div className="space-y-2">
          {recommendedConnections.map((person, index) => (
            <div
              key={index}
              className="w-full p-3 rounded-fb hover:bg-fb-gray-100 transition-colors cursor-pointer border border-fb-border bg-white shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-fb-text text-sm truncate">{person.name}</span>
                    {person.isBuddhist && <span className="text-xs">🙏</span>}
                  </div>
                  <p className="text-fb-text-secondary text-xs truncate">{person.position}</p>
                  <p className="text-fb-text-secondary text-xs">{person.company}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Users className="h-3 w-3 text-fb-text-secondary" />
                    <span className="text-fb-text-secondary text-xs">{person.mutualConnections}명 공통</span>
                  </div>
                </div>
                <button className="px-3 py-1 text-xs border border-fb-orange text-fb-orange hover:bg-fb-orange hover:text-white rounded-fb transition-colors">
                  연결
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 새로운 연결 요청 */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 px-3">
          <UserCheck className="h-4 w-4 text-green-500" />
          <h3 className="text-fb-text-secondary font-semibold text-fb-sm">새로운 요청</h3>
        </div>

        <div className="space-y-2">
          {connectionRequests.map((request, index) => (
            <div
              key={index}
              className="w-full p-3 rounded-fb hover:bg-fb-gray-100 transition-colors cursor-pointer border border-fb-border bg-white shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={request.avatar}
                  alt={request.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-fb-text text-sm block truncate">{request.name}</span>
                  <p className="text-fb-text-secondary text-xs truncate">{request.position}</p>
                  <p className="text-fb-text-secondary text-xs">{request.timeAgo}</p>
                </div>
                <div className="flex flex-col space-y-1">
                  <button className="px-2 py-1 text-xs bg-fb-orange text-white hover:bg-orange-600 rounded-fb transition-colors">
                    수락
                  </button>
                  <button className="px-2 py-1 text-xs border border-fb-gray-300 text-fb-text-secondary hover:border-fb-gray-400 rounded-fb transition-colors">
                    거절
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="pt-4 border-t border-fb-border">
        <div className="text-fb-text-secondary text-fb-xs px-3 space-y-2">
          <div className="flex flex-wrap gap-2">
            <span className="hover:underline cursor-pointer">Privacy</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Terms</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Advertising</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Ad Choices</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="hover:underline cursor-pointer">Cookies</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">More</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">JOBCONNECT © 2024</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
