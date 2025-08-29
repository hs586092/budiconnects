'use client';

export default function RightSidebar() {
  const featuredJobs = [
    {
      id: '1',
      title: '명상 지도사',
      company: '서울 선원',
      location: '서울 강남구'
    },
    {
      id: '2',
      title: '불교 콘텐츠 기획자',
      company: '법보신문',
      location: '서울 종로구'
    },
    {
      id: '3',
      title: '사찰 관리자',
      company: '조계사',
      location: '서울 종로구'
    }
  ];

  const activeSeekers = [
    {
      id: '1',
      name: '김정수',
      position: '불교 상담사',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face'
    },
    {
      id: '2',
      name: '이혜영',
      position: '명상 앱 개발자',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face'
    },
    {
      id: '3',
      name: '박수진',
      position: '불교 번역가',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face'
    }
  ];

  return (
    <aside className="w-[320px] p-4 space-y-4">
      {/* Featured Jobs */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold text-[#050505] mb-3">추천 채용공고</h3>
        <div className="space-y-3">
          {featuredJobs.map(job => (
            <div key={job.id} className="py-2 border-b border-[#E4E6EB] last:border-0 hover:bg-[#F2F3F5] -mx-2 px-2 rounded transition-colors cursor-pointer">
              <div className="font-medium text-sm text-[#050505]">{job.title}</div>
              <div className="text-xs text-[#65676B]">{job.company}</div>
              <div className="text-xs text-[#65676B] flex items-center gap-1">
                <span>📍</span>
                {job.location}
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-3 py-2 text-sm text-[#FF6B35] hover:bg-[#F2F3F5] rounded transition-colors">
          모든 채용공고 보기
        </button>
      </div>

      {/* Active Seekers */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold text-[#050505] mb-3">활발한 구직자</h3>
        <div className="space-y-3">
          {activeSeekers.map(seeker => (
            <div key={seeker.id} className="flex items-center gap-3 hover:bg-[#F2F3F5] -mx-2 px-2 py-2 rounded transition-colors cursor-pointer">
              <img
                src={seeker.avatar}
                alt={seeker.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-[#050505]">{seeker.name}</div>
                <div className="text-xs text-[#65676B]">{seeker.position}</div>
              </div>
              <div className="w-2 h-2 bg-[#42b72a] rounded-full"></div>
            </div>
          ))}
        </div>
        <button className="w-full mt-3 py-2 text-sm text-[#FF6B35] hover:bg-[#F2F3F5] rounded transition-colors">
          모든 구직자 보기
        </button>
      </div>

      {/* Buddhist Community Stats */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold text-[#050505] mb-3">커뮤니티 통계</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#65676B]">전체 회원</span>
            <span className="text-sm font-medium text-[#050505]">1,247명</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#65676B]">활성 채용공고</span>
            <span className="text-sm font-medium text-[#050505]">24개</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#65676B]">구직자</span>
            <span className="text-sm font-medium text-[#050505]">18명</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#65676B]">커뮤니티 게시글</span>
            <span className="text-sm font-medium text-[#050505]">156개</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold text-[#050505] mb-3">빠른 실행</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-[#F2F3F5] transition-colors text-left">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600">💼</span>
            </div>
            <span className="text-sm font-medium text-[#050505]">채용공고 작성</span>
          </button>
          <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-[#F2F3F5] transition-colors text-left">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600">👤</span>
            </div>
            <span className="text-sm font-medium text-[#050505]">일자리 찾기</span>
          </button>
          <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-[#F2F3F5] transition-colors text-left">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-orange-600">🏛️</span>
            </div>
            <span className="text-sm font-medium text-[#050505]">사찰 찾기</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
