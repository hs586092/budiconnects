'use client';

import { Post } from '@/types';
import { CheckCircle, Heart, MessageCircle, Share2, ThumbsUp } from 'lucide-react';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
}

// 타입별 스타일 맵
const typeStyles = {
  job: { badge: 'bg-blue-100 text-blue-700', label: '채용' },
  seeker: { badge: 'bg-green-100 text-green-700', label: '구직' },
  community: { badge: 'bg-orange-100 text-orange-700', label: '커뮤니티' }
};

export default function PostCard({ post, onLike }: PostCardProps) {
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return '방금 전';
    if (diffInHours < 24) return `${diffInHours}시간 전`;
    return `${Math.floor(diffInHours / 24)}일 전`;
  };

  return (
    <article className="bg-white rounded-lg shadow-sm mb-4">
      {/* 헤더: 프로필 + 배지 + 시간 */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            {post.author.verified && (
              <CheckCircle className="absolute -bottom-1 -right-1 h-4 w-4 text-[#FF6B35] bg-white rounded-full" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#050505]">{post.author.name}</span>
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${typeStyles[post.type].badge}`}>
                {typeStyles[post.type].label}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#65676B]">
              <span>{formatDate(post.createdAt)}</span>
              <span>•</span>
              <span>🌍</span>
            </div>
          </div>
        </div>
      </div>

      {/* 컨텐츠 */}
      <div className="px-4 pb-4">
        {post.type === 'job' && post.title && (
          <h3 className="font-bold text-lg text-[#050505] mb-2">{post.title}</h3>
        )}
        {post.type === 'seeker' && post.desired_position && (
          <h3 className="font-bold text-lg text-[#050505] mb-2">구직: {post.desired_position}</h3>
        )}
        <p className="text-[#050505] leading-relaxed">{post.content}</p>

        {/* job/seeker 메타데이터 */}
        {(post.type === 'job' || post.type === 'seeker') && (
          <div className="mt-3 p-3 bg-[#F2F3F5] rounded-lg">
            <div className="flex flex-wrap gap-4 text-sm text-[#65676B]">
              {post.type === 'job' && (
                <>
                  {post.company && (
                    <div className="flex items-center gap-1">
                      <span>🏢</span>
                      <span>{post.company}</span>
                    </div>
                  )}
                  {post.location && (
                    <div className="flex items-center gap-1">
                      <span>📍</span>
                      <span>{post.location}</span>
                    </div>
                  )}
                  {post.salary && (
                    <div className="flex items-center gap-1">
                      <span>💰</span>
                      <span>{post.salary}</span>
                    </div>
                  )}
                  {post.skills && post.skills.length > 0 && (
                    <div className="flex items-center gap-1">
                      <span>🛠️</span>
                      <span>{post.skills.join(', ')}</span>
                    </div>
                  )}
                </>
              )}
              {post.type === 'seeker' && (
                <>
                  {post.experience && (
                    <div className="flex items-center gap-1">
                      <span>💼</span>
                      <span>{post.experience}</span>
                    </div>
                  )}
                  {post.expected_salary && (
                    <div className="flex items-center gap-1">
                      <span>💰</span>
                      <span>{post.expected_salary}</span>
                    </div>
                  )}
                  {post.portfolio && (
                    <div className="flex items-center gap-1">
                      <span>🔗</span>
                      <a href={post.portfolio} className="text-[#FF6B35] hover:underline">
                        Portfolio
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 좋아요/댓글 수 */}
      <div className="px-4 py-2 border-t border-[#E4E6EB]">
        <div className="flex items-center justify-between text-[#65676B] text-sm">
          <div className="flex items-center space-x-1">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 bg-[#FF6B35] rounded-full border border-white flex items-center justify-center">
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

      {/* 인터랙션 바 (Facebook 동일) */}
      <div className="border-t border-[#E4E6EB]">
        <div className="flex">
          <button
            onClick={() => onLike(post.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#F2F3F5] transition-colors ${
              post.isLiked ? 'text-[#FF6B35]' : 'text-[#65676B]'
            }`}
          >
            {post.isLiked ? (
              <Heart className="h-5 w-5 fill-current" />
            ) : (
              <ThumbsUp className="h-5 w-5" />
            )}
            <span className="font-medium">좋아요</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#F2F3F5] transition-colors text-[#65676B]">
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">댓글</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#F2F3F5] transition-colors text-[#65676B]">
            <Share2 className="h-5 w-5" />
            <span className="font-medium">공유</span>
          </button>
        </div>
      </div>
    </article>
  );
}
