import { Clock, TrendingUp, UserPlus, Users } from 'lucide-react'
import React, { useState } from 'react'
import NetworkCard from './NetworkCard'

function NetworkPage() {
  const [activeTab, setActiveTab] = useState('discover')
  const [activeFilter, setActiveFilter] = useState('all')
  const [connectionStatus, setConnectionStatus] = useState({})

  // 더미 통계 데이터
  const stats = {
    connections: 127,
    pending: 8,
    newThisWeek: 12
  }

  // 탭 데이터
  const tabs = [
    { id: 'discover', label: 'Discover', icon: TrendingUp },
    { id: 'connections', label: 'My Network', icon: Users },
    { id: 'invitations', label: 'Invitations', icon: UserPlus },
    { id: 'sent', label: 'Sent', icon: Clock }
  ]

  // 필터 데이터
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'company', label: 'Same Company' },
    { id: 'industry', label: 'Same Industry' },
    { id: 'buddhist', label: 'Buddhist Community' }
  ]

  // 더미 프로필 데이터
  const profiles = [
    {
      id: '1',
      name: '김선명',
      position: 'Senior Frontend Developer',
      company: 'Naver',
      location: 'Seoul, Korea',
      mutualConnections: 12,
      skills: ['React', 'TypeScript', 'Next.js', 'Node.js', 'GraphQL'],
      isBuddhist: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '2',
      name: '이지혜',
      position: 'UX Designer',
      company: 'Samsung',
      location: 'Seoul, Korea',
      mutualConnections: 8,
      skills: ['Figma', 'Sketch', 'Prototyping', 'User Research'],
      isBuddhist: false,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '3',
      name: '박dharma',
      position: 'Product Manager',
      company: 'Kakao',
      location: 'Pangyo, Korea',
      mutualConnections: 15,
      skills: ['Product Strategy', 'Agile', 'Data Analysis', 'Leadership'],
      isBuddhist: true,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '4',
      name: '최수행',
      position: 'Meditation Teacher & Tech Lead',
      company: 'Temple Tech',
      location: 'Busan, Korea',
      mutualConnections: 6,
      skills: ['Mindfulness', 'Python', 'Machine Learning', 'Buddhism'],
      isBuddhist: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '5',
      name: '정마케터',
      position: 'Digital Marketing Manager',
      company: 'Coupang',
      location: 'Seoul, Korea',
      mutualConnections: 9,
      skills: ['SEO', 'SEM', 'Analytics', 'Content Marketing'],
      isBuddhist: false,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '6',
      name: '송개발자',
      position: 'Backend Engineer',
      company: 'Line',
      location: 'Seoul, Korea',
      mutualConnections: 11,
      skills: ['Java', 'Spring', 'Kubernetes', 'AWS'],
      isBuddhist: false,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '7',
      name: '한dharma',
      position: 'Dharma Teacher & Startup Founder',
      company: 'Mindful Tech',
      location: 'Jeju, Korea',
      mutualConnections: 7,
      skills: ['Buddhism', 'Teaching', 'Entrepreneurship', 'Mindfulness'],
      isBuddhist: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '8',
      name: '윤디자이너',
      position: 'Visual Designer',
      company: 'Baemin',
      location: 'Seoul, Korea',
      mutualConnections: 5,
      skills: ['Illustration', 'Branding', 'UI Design', 'Animation'],
      isBuddhist: false,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '9',
      name: '임수행자',
      position: 'DevOps Engineer',
      company: 'Nhn',
      location: 'Seoul, Korea',
      mutualConnections: 13,
      skills: ['Docker', 'CI/CD', 'Linux', 'Monitoring'],
      isBuddhist: true,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '10',
      name: '강기획자',
      position: 'Business Analyst',
      company: 'Hyundai',
      location: 'Seoul, Korea',
      mutualConnections: 4,
      skills: ['Data Analysis', 'SQL', 'Excel', 'Strategy'],
      isBuddhist: false,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '11',
      name: '조법사',
      position: 'Temple Administrator & Developer',
      company: 'Jogyesa Temple',
      location: 'Seoul, Korea',
      mutualConnections: 8,
      skills: ['Buddhism', 'Administration', 'Web Development', 'Community'],
      isBuddhist: true,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '12',
      name: '신스타트업',
      position: 'CTO',
      company: 'Buddha Tech',
      location: 'Seoul, Korea',
      mutualConnections: 16,
      skills: ['Architecture', 'Leadership', 'React', 'Blockchain'],
      isBuddhist: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  ]

  // 필터링된 프로필
  const filteredProfiles = profiles.filter(profile => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'company') return profile.company === 'Naver' // 예시
    if (activeFilter === 'industry') return profile.skills.some(skill => ['React', 'TypeScript', 'Frontend'].includes(skill))
    if (activeFilter === 'buddhist') return profile.isBuddhist
    return true
  })

  // Connect 버튼 클릭 핸들러
  const handleConnect = (profileId) => {
    setConnectionStatus(prev => ({
      ...prev,
      [profileId]: prev[profileId] === 'connected' ? 'none' : 'pending'
    }))
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* 상단 통계 섹션 */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-fb-text mb-4">Professional Network</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="fb-card p-4 text-center">
            <div className="text-2xl font-bold text-fb-orange">{stats.connections}</div>
            <div className="text-fb-text-secondary text-sm">Connections</div>
          </div>
          <div className="fb-card p-4 text-center">
            <div className="text-2xl font-bold text-blue-500">{stats.pending}</div>
            <div className="text-fb-text-secondary text-sm">Pending</div>
          </div>
          <div className="fb-card p-4 text-center">
            <div className="text-2xl font-bold text-green-500">{stats.newThisWeek}</div>
            <div className="text-fb-text-secondary text-sm">New This Week</div>
          </div>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="fb-card p-4 mb-6">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-fb font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'bg-fb-orange text-white'
                  : 'bg-fb-gray-100 text-fb-text-secondary hover:bg-fb-gray-200'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 필터 버튼 */}
      <div className="fb-card p-4 mb-6">
        <div className="flex space-x-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 py-2 rounded-fb font-medium text-sm transition-colors ${
                activeFilter === filter.id
                  ? 'bg-fb-orange text-white'
                  : 'bg-fb-gray-100 text-fb-text-secondary hover:bg-fb-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* 네트워크 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.map((profile) => (
          <NetworkCard
            key={profile.id}
            profile={profile}
            connectionStatus={connectionStatus[profile.id] || 'none'}
            onConnect={() => handleConnect(profile.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default NetworkPage
