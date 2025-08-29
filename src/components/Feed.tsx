'use client';

import { Post, PostType } from '@/types';
import PostCard from './PostCard';

interface FeedProps {
  posts: Post[];
  onLike: (postId: string) => void;
  activeFilter: PostType | 'all';
  onFilterChange: (filter: PostType | 'all') => void;
}

const filters = [
  { id: 'all' as const, label: '전체' },
  { id: 'job' as const, label: '채용공고' },
  { id: 'seeker' as const, label: '구직' },
  { id: 'community' as const, label: '커뮤니티' }
];

export default function Feed({ posts, onLike, activeFilter, onFilterChange }: FeedProps) {
  return (
    <div>
      {/* 필터 탭 */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                activeFilter === filter.id
                  ? 'bg-[#FF6B35] text-white'
                  : 'bg-[#F2F3F5] text-[#65676B] hover:bg-[#E4E6EB]'
              }`}
            >
              {filter.label}
              {filter.id === 'job' && activeFilter !== 'job' && (
                <span className="ml-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {posts.filter(p => p.type === 'job').length}
                </span>
              )}
              {filter.id === 'seeker' && activeFilter !== 'seeker' && (
                <span className="ml-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {posts.filter(p => p.type === 'seeker').length}
                </span>
              )}
              {filter.id === 'community' && activeFilter !== 'community' && (
                <span className="ml-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {posts.filter(p => p.type === 'community').length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 포스트 목록 */}
      <div className="space-y-4">
        {posts.map(post => (
          <PostCard key={post.id} post={post} onLike={onLike} />
        ))}
      </div>
    </div>
  );
}
