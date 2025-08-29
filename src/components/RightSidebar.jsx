import {
    Briefcase,
    Clock,
    Eye,
    Flame,
    MessageCircle,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react'
import React from 'react'

function RightSidebar() {

  // 실시간 채용공고 데이터
  const liveJobs = [
    {
      title: 'Frontend 개발자',
      company: '네이버',
      timeAgo: '방금 전',
      type: 'hot',
      buddhist: true
    },
    {
      title: '불교친화 기업 마케터',
      company: '삼성',
      timeAgo: '2분 전',
      type: 'fire',
      buddhist: true
    },
    {
      title: '프로그램 기획자',
      company: '템플스테이',
      timeAgo: '5분 전',
      type: 'new',
      buddhist: true
    }
  ]

  // HOT 구직글 데이터
  const hotSeekers = [
    {
      title: '5년차 UX 디자이너',
      views: 152,
      timeAgo: '1시간 전',
      buddhist: false
    },
    {
      title: '신입 불교학과 졸업생',
      views: 89,
      timeAgo: '3시간 전',
      buddhist: true
    },
    {
      title: '사찰 IT 관리자 희망',
      views: 67,
      timeAgo: '5시간 전',
      buddhist: true
    }
  ]

  // 실시간 커뮤니티 글
  const liveCommunityPosts = [
    {
      title: '오늘 면접에서 명상 얘기했더니...',
      author: '수행자김',
      timeAgo: '1분 전',
      type: 'live',
      comments: 5
    },
    {
      title: '직장에서 스트레스 받을 때 대처법',
      author: '마음챙김직장인',
      timeAgo: '3분 전',
      type: 'meditation',
      comments: 12
    },
    {
      title: '불교 친화적인 회사 다니는 후기',
      author: '法師',
      timeAgo: '7분 전',
      type: 'buddhist',
      comments: 8
    }
  ]

  return (
    <aside className="w-80 p-4 space-y-6">

      {/* 실시간 채용공고 */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 px-3">
          <Briefcase className="h-4 w-4 text-blue-500" />
          <h3 className="text-fb-text-secondary font-semibold text-fb-sm">실시간 채용공고</h3>
        </div>

        <div className="space-y-2">
          {liveJobs.map((job, index) => (
            <div
              key={index}
              className="w-full p-3 rounded-fb hover:bg-fb-gray-100 transition-colors cursor-pointer border border-fb-border bg-white shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    {job.type === 'hot' && <Zap className="h-3 w-3 text-orange-500 flex-shrink-0" />}
                    {job.type === 'fire' && <Flame className="h-3 w-3 text-red-500 flex-shrink-0" />}
                    {job.type === 'new' && <TrendingUp className="h-3 w-3 text-blue-500 flex-shrink-0" />}

                    <span className="font-medium text-fb-text text-sm truncate">{job.title}</span>
                    {job.buddhist && <span className="text-xs">🙏</span>}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-fb-text-secondary text-xs">{job.company}</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-fb-text-secondary" />
                      <span className="text-fb-text-secondary text-xs">{job.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOT 구직글 */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 px-3">
          <Users className="h-4 w-4 text-green-500" />
          <h3 className="text-fb-text-secondary font-semibold text-fb-sm">HOT 구직글</h3>
        </div>

        <div className="space-y-2">
          {hotSeekers.map((seeker, index) => (
            <div
              key={index}
              className="w-full p-3 rounded-fb hover:bg-fb-gray-100 transition-colors cursor-pointer border border-fb-border bg-white shadow-sm"
            >
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center space-x-2 flex-1 min-w-0">
                  <span className="font-medium text-fb-text text-sm truncate">{seeker.title}</span>
                  {seeker.buddhist && <span className="text-xs">🙏</span>}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Eye className="h-3 w-3 text-fb-text-secondary" />
                  <span className="text-fb-text-secondary text-xs">{seeker.views}명이 봄</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3 text-fb-text-secondary" />
                  <span className="text-fb-text-secondary text-xs">{seeker.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 실시간 커뮤니티 */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 px-3">
          <MessageCircle className="h-4 w-4 text-green-500" />
          <h3 className="text-fb-text-secondary font-semibold text-fb-sm">실시간 커뮤니티</h3>
        </div>

        <div className="space-y-2">
          {liveCommunityPosts.map((post, index) => (
            <div
              key={index}
              className="w-full p-3 rounded-fb hover:bg-fb-gray-100 transition-colors cursor-pointer border border-fb-border bg-white shadow-sm"
            >
              <div className="flex items-start space-x-2 mb-2">
                {post.type === 'live' && <span className="text-red-500 text-xs">🔴</span>}
                {post.type === 'meditation' && <span className="text-blue-500 text-xs">🧘</span>}
                {post.type === 'buddhist' && <span className="text-orange-500 text-xs">🙏</span>}

                <div className="flex-1 min-w-0">
                  <p className="font-medium text-fb-text text-sm leading-tight truncate">{post.title}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-fb-text-secondary text-xs">{post.author}</span>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-3 w-3 text-fb-text-secondary" />
                        <span className="text-fb-text-secondary text-xs">{post.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 text-fb-text-secondary" />
                        <span className="text-fb-text-secondary text-xs">{post.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default RightSidebar
