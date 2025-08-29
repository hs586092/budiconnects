'use client';

import { Bell, Home, MessageCircle, Search, Users } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-[#E4E6EB] z-50">
      <div className="flex items-center justify-between px-4 h-full">
        {/* 좌측: 로고 */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#FF6B35] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <span className="text-xl font-semibold text-[#FF6B35]">BUDICONNECTS</span>
        </div>

        {/* 중앙: 검색 */}
        <div className="flex-1 max-w-[680px] mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#65676B]" />
            <input
              className="w-full h-10 pl-10 pr-4 bg-[#F2F3F5] rounded-full border-0 focus:outline-none focus:ring-0 text-[#050505] placeholder-[#65676B]"
                              placeholder="BUDICONNECTS 검색"
            />
          </div>
        </div>

        {/* 우측: 아이콘 5개 */}
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full hover:bg-[#F2F3F5] flex items-center justify-center transition-colors">
            <Home className="h-5 w-5 text-[#FF6B35]" />
          </button>
          <button className="w-10 h-10 rounded-full hover:bg-[#F2F3F5] flex items-center justify-center transition-colors">
            <Users className="h-5 w-5 text-[#65676B]" />
          </button>
          <button className="w-10 h-10 rounded-full hover:bg-[#F2F3F5] flex items-center justify-center transition-colors">
            <MessageCircle className="h-5 w-5 text-[#65676B]" />
          </button>
          <button className="w-10 h-10 rounded-full hover:bg-[#F2F3F5] flex items-center justify-center transition-colors relative">
            <Bell className="h-5 w-5 text-[#65676B]" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#FF6B35] text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          <div className="w-10 h-10 rounded-full bg-[#E4E6EB] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
