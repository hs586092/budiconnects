import { MessageCircle, UserCheck, UserPlus, Users } from 'lucide-react'
import React from 'react'

function NetworkCard({ profile, connectionStatus, onConnect }) {
  const {
    name,
    position,
    company,
    location,
    mutualConnections,
    skills,
    isBuddhist,
    avatar
  } = profile

  // 표시할 스킬 (최대 3개)
  const displaySkills = skills.slice(0, 3)
  const remainingSkills = skills.length - 3

  // 연결 상태별 버튼 텍스트
  const getConnectButtonText = () => {
    switch (connectionStatus) {
      case 'pending':
        return 'Pending'
      case 'connected':
        return 'Connected'
      default:
        return 'Connect'
    }
  }

  // 연결 상태별 버튼 스타일
  const getConnectButtonStyle = () => {
    switch (connectionStatus) {
      case 'pending':
        return 'bg-yellow-500 text-white cursor-default'
      case 'connected':
        return 'bg-green-500 text-white cursor-default'
      default:
        return 'border-2 border-fb-orange text-fb-orange hover:bg-fb-orange hover:text-white'
    }
  }

  return (
    <div className="fb-card overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* 커버 이미지 (오렌지 그라데이션) */}
      <div className="h-20 bg-gradient-to-r from-orange-400 to-orange-600 relative">
        {isBuddhist && (
          <div className="absolute top-2 right-2">
            <span className="bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-orange-600">
              🙏 Buddhist
            </span>
          </div>
        )}
      </div>

      {/* 프로필 사진 (커버와 겹침) */}
      <div className="relative px-6 pb-6">
        <div className="absolute -top-10 left-6">
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* 프로필 정보 */}
        <div className="pt-12">
          <h3 className="font-bold text-fb-text text-lg leading-tight mb-1">
            {name}
          </h3>
          <p className="text-fb-text-secondary font-medium text-sm mb-1">
            {position}
          </p>
          <p className="text-fb-text-secondary text-sm mb-1">
            {company}
          </p>
          <p className="text-fb-text-secondary text-xs mb-3">
            📍 {location}
          </p>

          {/* Mutual Connections */}
          <div className="flex items-center space-x-1 mb-4">
            <Users className="h-4 w-4 text-fb-text-secondary" />
            <span className="text-fb-text-secondary text-sm">
              {mutualConnections} mutual connections
            </span>
          </div>

          {/* 스킬 태그 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {displaySkills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-fb-gray-100 text-fb-text-secondary rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
            {remainingSkills > 0 && (
              <span className="px-2 py-1 bg-fb-gray-200 text-fb-text-secondary rounded-full text-xs font-medium">
                +{remainingSkills} more
              </span>
            )}
          </div>

          {/* 액션 버튼 */}
          <div className="flex space-x-2">
            <button
              onClick={onConnect}
              disabled={connectionStatus === 'pending' || connectionStatus === 'connected'}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-fb font-medium text-sm transition-colors ${getConnectButtonStyle()}`}
            >
              {connectionStatus === 'connected' ? (
                <UserCheck className="h-4 w-4" />
              ) : (
                <UserPlus className="h-4 w-4" />
              )}
              <span>{getConnectButtonText()}</span>
            </button>

            <button className="p-2 border-2 border-fb-gray-300 text-fb-text-secondary hover:border-fb-orange hover:text-fb-orange rounded-fb transition-colors">
              <MessageCircle className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NetworkCard
