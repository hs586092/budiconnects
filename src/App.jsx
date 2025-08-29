import React, { useState } from 'react'
import CreatePost from './components/CreatePost'
import Feed from './components/Feed'
import Header from './components/Header'
import NetworkPage from './components/NetworkPage'
import RightSidebar from './components/RightSidebar'
import Sidebar from './components/Sidebar'

function App() {
  const [posts, setPosts] = useState([
    {
      id: '1',
      type: 'job',
      author: {
        id: '1',
        name: '불교 문화원',
        avatar: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop&crop=face',
        verified: true
      },
      content: '우리 문화원에서 새로운 동료를 찾고 있습니다. 불교 철학에 관심이 있고 커뮤니티와 함께 성장하고 싶은 분들의 지원을 기다립니다.',
      title: '불교 문화 교육 담당자',
      company: '한국불교문화원',
      location: '서울 종로구',
      salary: '연봉 3,500-4,000만원',
      skills: ['불교 철학', '교육 기획', '커뮤니케이션'],
      createdAt: new Date('2024-08-29T10:00:00'),
      likes: 24,
      comments: 8,
      isLiked: false
    },
    {
      id: '2',
      type: 'seeker',
      author: {
        id: '2',
        name: '정진수',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        verified: false
      },
      content: '10년간 IT 업계에서 근무하다가 마음의 평화를 찾아 불교에 입문했습니다. 기술과 영성을 결합한 일을 하고 싶습니다.',
      desired_position: '불교 앱/웹사이트 개발자',
      experience: '웹 개발 10년',
      expected_salary: '연봉 4,000-5,000만원',
      portfolio: 'github.com/jeongjinsu',
      createdAt: new Date('2024-08-29T08:30:00'),
      likes: 18,
      comments: 12,
      isLiked: true
    },
    {
      id: '3',
      type: 'community',
      author: {
        id: '3',
        name: '혜원스님',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
        verified: true
      },
      content: '오늘 아침 좌선을 마치고 문득 드는 생각입니다. 일과 수행의 균형을 맞추는 것이 현대인들에게는 가장 큰 과제가 아닐까 싶습니다. 여러분은 어떻게 생각하시나요? 🙏',
      createdAt: new Date('2024-08-29T06:00:00'),
      likes: 67,
      comments: 23,
      isLiked: false
    }
  ])

  const [activeFilter, setActiveFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState('home')

  const addPost = (newPost) => {
    const post = {
      ...newPost,
      id: (posts.length + 1).toString(),
      author: {
        id: 'user',
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        verified: false,
      },
      createdAt: new Date(),
      likes: 0,
      comments: 0,
      isLiked: false
    }
    setPosts([post, ...posts])
  }

  const toggleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
        : post
    ))
  }

  const filteredPosts = activeFilter === 'all'
    ? posts
    : posts.filter(post => post.type === activeFilter)

  const renderMainContent = () => {
    switch (currentPage) {
      case 'network':
        return <NetworkPage />
      case 'home':
      default:
        return (
          <main className="w-[680px] px-4 py-6">
            <CreatePost onPost={addPost} />
            <Feed
              posts={filteredPosts}
              onLike={toggleLike}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </main>
        )
    }
  }

  return (
    <div className="min-h-screen bg-fb-gray-50">
      <Header />
      <div className="flex pt-16 justify-center">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        {currentPage === 'network' ? (
          <NetworkPage />
        ) : (
          <>
            <main className="w-[680px] px-4 py-6">
              <CreatePost onPost={addPost} />
              <Feed
                posts={filteredPosts}
                onLike={toggleLike}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </main>
            <RightSidebar />
          </>
        )}
      </div>
    </div>
  )
}

export default App
