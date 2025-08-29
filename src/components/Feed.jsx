import PostCard from './PostCard';

export default function Feed({ posts, onLike, activeFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: '전체', count: posts.length },
    { id: 'job', label: '채용공고', count: posts.filter(p => p.type === 'job').length },
    { id: 'seeker', label: '구직', count: posts.filter(p => p.type === 'seeker').length },
    { id: 'community', label: '커뮤니티', count: posts.filter(p => p.type === 'community').length }
  ];

  return (
        <div>
      {/* 필터 탭 */}
      <div className="fb-card p-4 mb-4">
        <div className="flex gap-1 overflow-x-auto">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-fb-4 py-fb-2 rounded-fb font-medium text-fb-sm whitespace-nowrap transition-colors ${
                activeFilter === filter.id
                  ? 'bg-fb-orange text-white'
                  : 'bg-fb-gray-100 text-fb-text-secondary hover:bg-fb-gray-200'
              }`}
            >
              {filter.label}
              {filter.count > 0 && (
                <span className={`ml-1 px-1 rounded-full text-fb-xs ${
                  activeFilter === filter.id
                    ? 'bg-white bg-opacity-20 text-white'
                    : 'bg-fb-gray-200 text-fb-text-secondary'
                }`}>
                  {filter.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 포스트 목록 */}
      <div className="space-y-3">
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard
              key={post.id}
              post={post}
              onLike={onLike}
            />
          ))
        ) : (
          <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <div className="text-gray-500 mb-2">
              {activeFilter === 'all' ? '📝' :
               activeFilter === 'job' ? '💼' :
               activeFilter === 'seeker' ? '👤' : '💬'}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {activeFilter === 'all' ? '아직 게시글이 없습니다' :
               activeFilter === 'job' ? '채용공고가 없습니다' :
               activeFilter === 'seeker' ? '구직글이 없습니다' : '커뮤니티 글이 없습니다'}
            </h3>
            <p className="text-gray-600">
              {activeFilter === 'all' ? '첫 번째 게시글을 작성해보세요!' :
               activeFilter === 'job' ? '첫 번째 채용공고를 올려보세요!' :
               activeFilter === 'seeker' ? '구직글을 작성해보세요!' : '자유롭게 이야기를 나눠보세요!'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
