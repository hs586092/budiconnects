import { Heart, MessageCircle, MoreHorizontal, Share2, ThumbsUp } from 'lucide-react';

export default function PostCard({ post, onLike }) {
  const formatDate = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return '방금 전';
    if (diffInHours < 24) return `${diffInHours}시간 전`;
    return `${Math.floor(diffInHours / 24)}일 전`;
  };

  const getTypeBadge = (type) => {
    const badges = {
      job: { label: '채용', color: 'bg-blue-100 text-blue-700 border-blue-200', icon: '💼' },
      seeker: { label: '구직', color: 'bg-green-100 text-green-700 border-green-200', icon: '👤' },
      community: { label: '커뮤니티', color: 'bg-orange-100 text-orange-700 border-orange-200', icon: '💬' }
    };
    return badges[type] || badges.community;
  };

  const badge = getTypeBadge(post.type);

  return (
    <article className="fb-card mb-4">
      {/* 헤더: 프로필 + 배지 + 시간 */}
      <div className="p-fb-4 pb-fb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-fb-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-fb-2">
                <h3 className="font-semibold text-fb-text text-fb-base">{post.author.name}</h3>
                {post.author.verified && (
                  <div className="w-4 h-4 bg-fb-orange rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
                <span className={`px-2 py-1 rounded-full text-fb-xs font-medium ${badge.color}`}>
                  {badge.icon} {badge.label}
                </span>
              </div>
              <div className="text-fb-sm text-fb-text-secondary">
                {formatDate(post.createdAt)} · 🌍
              </div>
            </div>
          </div>
          <button className="p-2 fb-hover rounded-full transition-colors">
            <MoreHorizontal className="h-5 w-5 text-fb-text-secondary" />
          </button>
        </div>
      </div>

            {/* 타입별 메타데이터 */}
      {(post.type === 'job' || post.type === 'seeker') && (
        <div className="px-fb-4 pb-fb-3">
          <div className={`rounded-fb p-fb-3 border ${
            post.type === 'job'
              ? 'bg-blue-50 border-blue-200'
              : 'bg-green-50 border-green-200'
          }`}>
            {post.type === 'job' && (
              <div className="space-y-fb-2">
                <div className="font-semibold text-fb-text text-fb-lg">{post.title}</div>
                <div className="grid grid-cols-1 gap-fb-2">
                  {post.company && (
                    <div className="flex items-center gap-2 text-fb-sm text-fb-text-secondary">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xs">🏢</span>
                      </div>
                      <span className="font-medium">{post.company}</span>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-fb-4">
                    {post.location && (
                      <div className="flex items-center gap-1 text-fb-sm text-fb-text-secondary">
                        <span className="text-red-600">📍</span>
                        <span>{post.location}</span>
                      </div>
                    )}
                    {post.salary && (
                      <div className="flex items-center gap-1 text-fb-sm text-fb-text-secondary">
                        <span className="text-green-600">💰</span>
                        <span className="font-medium">{post.salary}</span>
                      </div>
                    )}
                  </div>
                </div>
                {post.skills && post.skills.length > 0 && (
                  <div className="pt-fb-2 border-t border-blue-200">
                    <div className="text-fb-xs text-blue-700 font-medium mb-fb-1">필요 기술</div>
                    <div className="flex flex-wrap gap-1">
                      {post.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-fb-xs font-medium border border-blue-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {post.type === 'seeker' && (
              <div className="space-y-fb-2">
                <div className="font-semibold text-fb-text text-fb-lg">{post.desired_position}</div>
                <div className="grid grid-cols-1 gap-fb-2">
                  <div className="flex flex-wrap gap-fb-4">
                    {post.experience && (
                      <div className="flex items-center gap-1 text-fb-sm text-fb-text-secondary">
                        <span className="text-blue-600">📅</span>
                        <span>{post.experience}</span>
                      </div>
                    )}
                    {post.expected_salary && (
                      <div className="flex items-center gap-1 text-fb-sm text-fb-text-secondary">
                        <span className="text-green-600">💰</span>
                        <span className="font-medium">{post.expected_salary}</span>
                      </div>
                    )}
                  </div>
                  {post.portfolio && (
                    <div className="pt-fb-2 border-t border-green-200">
                      <a href={post.portfolio} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-1 text-fb-sm text-blue-600 hover:text-blue-800 hover:underline font-medium">
                        <span>🔗</span>
                        <span>포트폴리오 보기</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 본문 내용 */}
      <div className="px-fb-4 py-fb-3">
        <p className="text-fb-text whitespace-pre-wrap leading-relaxed text-fb-base">
          {post.content}
        </p>
      </div>

      {/* 이미지 (있다면) */}
      {post.image && (
        <div className="px-fb-4 pb-fb-3">
          <img
            src={post.image}
            alt="Post content"
            className="w-full rounded-fb"
          />
        </div>
      )}

      {/* 좋아요/댓글 통계 */}
      <div className="px-fb-4 pb-fb-2">
        <div className="flex justify-between items-center text-fb-sm text-fb-text-secondary">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 bg-fb-orange rounded-full border border-white flex items-center justify-center">
                <Heart className="h-2 w-2 text-white fill-current" />
              </div>
            </div>
            <span>{post.likes}명이 좋아합니다</span>
          </div>
          <div className="flex space-x-4">
            <span className="hover:underline cursor-pointer">댓글 {post.comments}개</span>
          </div>
        </div>
      </div>

      {/* 인터랙션 바 */}
      <div className="border-t border-fb-border px-fb-4 py-fb-2">
        <div className="flex">
          <button
            className={`flex-1 flex items-center justify-center gap-2 py-fb-2 fb-hover transition-colors rounded-fb ${
              post.isLiked ? 'text-fb-orange' : 'text-fb-text-secondary'
            }`}
            onClick={() => onLike(post.id)}
          >
            {post.isLiked ? (
              <Heart className="h-5 w-5 fill-current" />
            ) : (
              <ThumbsUp className="h-5 w-5" />
            )}
            <span className="font-medium text-fb-sm">좋아요</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-fb-2 fb-hover transition-colors rounded-fb text-fb-text-secondary">
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium text-fb-sm">댓글</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-fb-2 fb-hover transition-colors rounded-fb text-fb-text-secondary">
            <Share2 className="h-5 w-5" />
            <span className="font-medium text-fb-sm">공유</span>
          </button>
        </div>
      </div>
    </article>
  );
}
