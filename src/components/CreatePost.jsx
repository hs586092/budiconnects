import { Image, MapPin, Smile } from 'lucide-react';
import { useState } from 'react';

export default function CreatePost({ onPost }) {
  const [postType, setPostType] = useState('community');
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // 기본 유효성 검사
    if (!content.trim()) return;

    // 타입별 추가 유효성 검사
    if (postType === 'job' && (!title.trim() || !company.trim())) {
      alert('채용공고는 제목과 회사명이 필수입니다.');
      return;
    }

    if (postType === 'seeker' && !desiredPosition.trim()) {
      alert('구직글은 희망 직무가 필수입니다.');
      return;
    }

    const postData = {
      type: postType,
      content,
      ...(postType === 'job' && {
        title,
        company,
        location,
        salary,
        skills: skills ? skills.split(',').map(s => s.trim()).filter(s => s) : []
      }),
      ...(postType === 'seeker' && {
        desired_position: desiredPosition,
        experience,
        expected_salary: expectedSalary,
        portfolio
      })
    };

    onPost(postData);

    // 폼 초기화
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

  // 제출 버튼 활성화 조건
  const isSubmitDisabled = () => {
    if (!content.trim()) return true;
    if (postType === 'job' && (!title.trim() || !company.trim())) return true;
    if (postType === 'seeker' && !desiredPosition.trim()) return true;
    return false;
  };

  return (
    <div className="bg-white rounded-fb shadow-fb mb-3 border border-fb-border">
      <form onSubmit={handleSubmit}>
        {/* 타입 선택 버튼 */}
        <div className="p-3 border-b border-fb-border">
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => setPostType('job')}
              className={`flex-1 px-3 py-2 rounded-fb font-medium text-fb-sm transition-colors ${
                postType === 'job'
                  ? 'bg-blue-500 text-white'
                  : 'bg-fb-gray-100 text-fb-text-secondary hover:bg-fb-gray-200'
              }`}
            >
              💼 채용공고
            </button>
            <button
              type="button"
              onClick={() => setPostType('seeker')}
              className={`flex-1 px-3 py-2 rounded-fb font-medium text-fb-sm transition-colors ${
                postType === 'seeker'
                  ? 'bg-green-500 text-white'
                  : 'bg-fb-gray-100 text-fb-text-secondary hover:bg-fb-gray-200'
              }`}
            >
              👤 구직글
            </button>
            <button
              type="button"
              onClick={() => setPostType('community')}
              className={`flex-1 px-3 py-2 rounded-fb font-medium text-fb-sm transition-colors ${
                postType === 'community'
                  ? 'bg-fb-orange text-white'
                  : 'bg-fb-gray-100 text-fb-text-secondary hover:bg-fb-gray-200'
              }`}
            >
              💬 커뮤니티
            </button>
          </div>
        </div>

        {/* 동적 입력 필드 */}
        {postType === 'job' && (
          <div className="p-4 border-b border-fb-border bg-fb-gray-50">
            <div className="space-y-fb-3">
              <input
                type="text"
                placeholder="채용 제목 *"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="fb-input text-fb-base"
                required
              />
              <input
                type="text"
                placeholder="회사명 *"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="fb-input text-fb-base"
                required
              />
              <div className="flex gap-fb-2">
                <input
                  type="text"
                  placeholder="근무지"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="fb-input text-fb-base flex-1"
                />
                <input
                  type="text"
                  placeholder="급여 범위"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="fb-input text-fb-base flex-1"
                />
              </div>
              <input
                type="text"
                placeholder="기술 스택 (쉼표로 구분)"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="fb-input text-fb-base"
              />
            </div>
          </div>
        )}

        {postType === 'seeker' && (
          <div className="p-4 border-b border-fb-border bg-fb-gray-50">
            <div className="space-y-fb-3">
              <input
                type="text"
                placeholder="희망 직무 *"
                value={desiredPosition}
                onChange={(e) => setDesiredPosition(e.target.value)}
                className="fb-input text-fb-base"
                required
              />
              <div className="flex gap-fb-2">
                <input
                  type="text"
                  placeholder="경력"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="fb-input text-fb-base flex-1"
                />
                <input
                  type="text"
                  placeholder="희망 연봉"
                  value={expectedSalary}
                  onChange={(e) => setExpectedSalary(e.target.value)}
                  className="fb-input text-fb-base flex-1"
                />
              </div>
              <input
                type="url"
                placeholder="포트폴리오 URL (선택사항)"
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
                className="fb-input text-fb-base"
              />
            </div>
          </div>
        )}

                {/* 메인 내용 입력 */}
        <div className="p-4">
          <div className="flex items-start gap-fb-3">
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
                className="w-full min-h-[60px] p-fb-3 bg-fb-gray-50 rounded-fb border-0 focus:outline-none focus:ring-1 focus:ring-fb-orange placeholder-fb-text-secondary resize-none text-fb-base"
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="flex justify-between items-center px-4 py-3 border-t border-fb-border">
          <div className="flex gap-1">
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 rounded-fb hover:bg-fb-hover transition-colors text-fb-text-secondary"
            >
              <Image className="h-5 w-5 text-green-600" />
              <span className="text-fb-sm font-medium">사진</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 rounded-fb hover:bg-fb-hover transition-colors text-fb-text-secondary"
            >
              <MapPin className="h-5 w-5 text-red-600" />
              <span className="text-fb-sm font-medium">위치</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 rounded-fb hover:bg-fb-hover transition-colors text-fb-text-secondary"
            >
              <Smile className="h-5 w-5 text-yellow-600" />
              <span className="text-fb-sm font-medium">기분</span>
            </button>
          </div>
          <button
            type="submit"
            disabled={isSubmitDisabled()}
            className="fb-btn fb-btn-primary"
          >
            게시
          </button>
        </div>
      </form>
    </div>
  );
}
