'use client';

import { Briefcase, Heart, HelpCircle, Home, LucideIcon, Settings, Users, UserSearch } from 'lucide-react';

const menuSections = [
  {
    items: [
      { icon: Home, label: '홈', path: '/', active: true },
      { icon: Users, label: '친구', path: '/friends', active: false }
    ]
  },
  {
    title: '구인구직',
    items: [
      { icon: Briefcase, label: '채용공고', path: '/jobs', badge: 'blue', count: 24, active: false },
      { icon: UserSearch, label: '구직자', path: '/seekers', badge: 'green', count: 18, active: false }
    ]
  },
  {
    title: '커뮤니티',
    items: [
      { icon: Heart, label: '자유게시판', path: '/community', badge: 'orange', count: 156, active: false }
    ]
  }
];

type MenuItem = {
  icon: LucideIcon;
  label: string;
  path: string;
  active: boolean;
  badge?: string;
  count?: number;
};

export default function Sidebar() {
  return (
    <aside className="w-[280px] h-screen pt-4 pl-2 pr-2">
      <div className="space-y-2">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.title && (
              <div className="px-2 py-2">
                <h3 className="text-[#65676B] font-semibold text-sm">{section.title}</h3>
              </div>
            )}

            {section.items.map((item: MenuItem, itemIndex) => (
              <button
                key={itemIndex}
                className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg text-left hover:bg-[#F2F3F5] transition-colors ${
                  item.active ? 'bg-[#F2F3F5]' : ''
                }`}
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                  item.active ? 'bg-[#FF6B35]' : 'bg-[#E4E6EB]'
                }`}>
                  <item.icon className={`h-5 w-5 ${
                    item.active ? 'text-white' : 'text-[#65676B]'
                  }`} />
                </div>
                <div className="flex-1">
                  <span className={`font-medium ${
                    item.active ? 'text-[#FF6B35]' : 'text-[#050505]'
                  }`}>
                    {item.label}
                  </span>
                  {item.count && (
                    <span className="ml-2 text-xs text-[#65676B] bg-[#E4E6EB] px-2 py-0.5 rounded-full">
                      {item.count}
                    </span>
                  )}
                </div>
              </button>
            ))}

            {sectionIndex < menuSections.length - 1 && (
              <div className="my-3 border-t border-[#E4E6EB]"></div>
            )}
          </div>
        ))}

        {/* 하단 메뉴 */}
        <div className="mt-8 space-y-1">
          <div className="border-t border-[#E4E6EB] mb-3"></div>
          <button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg text-left hover:bg-[#F2F3F5] transition-colors">
            <div className="w-9 h-9 rounded-full bg-[#E4E6EB] flex items-center justify-center">
              <Settings className="h-5 w-5 text-[#65676B]" />
            </div>
            <span className="font-medium text-[#050505]">설정</span>
          </button>
          <button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg text-left hover:bg-[#F2F3F5] transition-colors">
            <div className="w-9 h-9 rounded-full bg-[#E4E6EB] flex items-center justify-center">
              <HelpCircle className="h-5 w-5 text-[#65676B]" />
            </div>
            <span className="font-medium text-[#050505]">도움말 및 지원</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
