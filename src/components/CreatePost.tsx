'use client';

import { Post, PostType } from '@/types';
import { Image, MapPin, Smile } from 'lucide-react';
import { useState } from 'react';

interface CreatePostProps {
  onPost: (post: Omit<Post, 'id' | 'author' | 'createdAt' | 'likes' | 'comments' | 'isLiked'>) => void;
}

export default function CreatePost({ onPost }: CreatePostProps) {
  const [postType, setPostType] = useState<PostType>('community');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [skills, setSkills] = useState('');
  const [desiredPosition, setDesiredPosition] = useState('');
  const [experience, setExperience] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [portfolio, setPortfolio] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const postData: Omit<Post, 'id' | 'author' | 'createdAt' | 'likes' | 'comments' | 'isLiked'> = {
      type: postType,
      content,
      ...(postType === 'job' && {
        title,
        company,
        location,
        salary,
        skills: skills ? skills.split(',').map(s => s.trim()) : []
      }),
      ...(postType === 'seeker' && {
        desired_position: desiredPosition,
        experience,
        expected_salary: expectedSalary,
        portfolio
      })
    };

    onPost(postData);

    // Reset form
    setContent('');
    setTitle('');
    setCompany('');
    setLocation('');
    setSalary('');
    setSkills('');
    setDesiredPosition('');
    setExperience('');
    setExpectedSalary('');
    setPortfolio('');
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
      <form onSubmit={handleSubmit}>
        {/* 타입 선택 버튼 */}
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setPostType('job')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              postType === 'job'
                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            💼 채용공고
          </button>
          <button
            type="button"
            onClick={() => setPostType('seeker')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              postType === 'seeker'
                ? 'bg-green-100 text-green-700 border border-green-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            👤 구직글
          </button>
          <button
            type="button"
            onClick={() => setPostType('community')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              postType === 'community'
                ? 'bg-orange-100 text-orange-700 border border-orange-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            💬 커뮤니티
          </button>
        </div>

        {/* 동적 입력 필드 */}
        {postType === 'job' && (
          <div className="space-y-3 mb-4">
            <input
              type="text"
              placeholder="채용 제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-10 px-3 bg-[#F2F3F5] rounded-lg border-0 focus:outline-none focus:ring-1 focus:ring-[#FF6B35] placeholder-[#65676B]"
            />
            <input
              type="text"
              placeholder="회사명"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full h-10 px-3 bg-[#F2F3F5] rounded-lg border-0 focus:outline-none focus:ring-1 focus:ring-[#FF6B35] placeholder-[#65676B]"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="근무지"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 h-10 px-3 bg-[#F2F3F5] rounded-lg border-0 focus:outline-none focus:ring-1 focus:ring-[#FF6B35] placeholder-[#65676B]"
              />
              <input
                type="text"
                placeholder="급여 범위"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="flex-1 h-10 px-3 bg-[#F2F3F5] rounded-lg border-0 focus:outline-none focus:ring-1 focus:ring-[#FF6B35] placeholder-[#65676B]"
              />
            </div>
            <input
              type="text"
              placeholder="기술 스택 (쉼표로 구분)"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full h-10 px-3 bg-[#F2F3F5] rounded-lg border-0 focus:outline-none focus:ring-1 focus:ring-[#FF6B35] placeholder-[#65676B]"
            />
          </div>
        )}

        {postType === 'seeker' && (
          <div className="space-y-3 mb-4">
            <input
              type="text"
              placeholder="희망 직무"
              value={desiredPosition}
              onChange={(e) => setDesiredPosition(e.target.value)}
              className="w-full h-10 px-3 bg-[#F2F3F5] rounded-lg border-0 focus:outline-none focus:ring-1 focus:ring-[#FF6B35] placeholder-[#65676B]"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="경력 년수"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="flex-1 h-10 px-3 bg-[#F2F3F5] rounded-lg border-0 focus:outline-none focus:ring-1 focus:ring-[#FF6B35] placeholder-[#65676B]"
              />
              <input
                type="text"
                placeholder="희망 연봉"
                value={expectedSalary}
                onChange={(e) => setExpectedSalary(e.target.value)}
                className="flex-1 h-10 px-3 bg-[#F2F3F5] rounded-lg border-0 focus:outline-none focus:ring-1 focus:ring-[#FF6B35] placeholder-[#65676B]"
              />
            </div>
            <input
              type="text"
              placeholder="포트폴리오 URL"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
              className="w-full h-10 px-3 bg-[#F2F3F5] rounded-lg border-0 focus:outline-none focus:ring-1 focus:ring-[#FF6B35] placeholder-[#65676B]"
            />
          </div>
        )}

        <div className="flex items-start gap-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
            alt="Your profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <textarea
              placeholder={
                postType === 'job' ? "채용 공고 내용을 자세히 작성해주세요..." :
                postType === 'seeker' ? "자신을 소개하고 찾고 있는 직무에 대해 설명해주세요..." :
                "불교와 마음챙김에 대해 무엇을 생각하고 계신가요?"
              }
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[60px] p-3 bg-[#F2F3F5] rounded-lg border-0 focus:outline-none focus:ring-1 focus:ring-[#FF6B35] placeholder-[#65676B] resize-none"
              rows={3}
            />
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-[#E4E6EB]">
          <div className="flex gap-2">
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F2F3F5] transition-colors text-[#65676B]"
            >
              <Image className="h-5 w-5 text-green-600" />
                              <span className="text-sm font-medium">사진</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F2F3F5] transition-colors text-[#65676B]"
              >
                <MapPin className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium">위치</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F2F3F5] transition-colors text-[#65676B]"
              >
                <Smile className="h-5 w-5 text-yellow-600" />
                <span className="text-sm font-medium">기분</span>
            </button>
          </div>
          <button
            type="submit"
            disabled={!content.trim()}
            className="px-6 py-2 bg-[#FF6B35] text-white rounded-lg font-medium hover:bg-[#e55a2b] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            게시
          </button>
        </div>
      </form>
    </div>
  );
}
