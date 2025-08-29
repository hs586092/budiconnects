import {
    CheckCircle,
    Heart,
    MessageCircle,
    MoreHorizontal,
    Share2,
    ThumbsUp
} from 'lucide-react'
import React, { useState } from 'react'

function Post({ post, onLike }) {
  const [showComments, setShowComments] = useState(false)
  const [commentText, setCommentText] = useState('')

  const handleLike = () => {
    onLike(post.id)
  }

  const handleComment = (e) => {
    e.preventDefault()
    if (commentText.trim()) {
      // In a real app, this would add the comment
      setCommentText('')
    }
  }

  return (
    <div className="fb-card">
      {/* Post Header */}
      <div className="p-4 pb-2">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            {post.author.verified && (
              <CheckCircle className="absolute -bottom-1 -right-1 h-4 w-4 text-fb-orange bg-white rounded-full" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-fb-text hover:underline cursor-pointer">
                {post.author.name}
              </span>
              {post.author.verified && (
                <span className="text-fb-text-secondary text-fb-xs">✓ Verified</span>
              )}
            </div>
            <div className="flex items-center space-x-2 text-fb-text-secondary text-fb-sm">
              <span>{post.timestamp}</span>
              <span>•</span>
              <span>🌍</span>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-fb-gray-100 transition-colors">
            <MoreHorizontal className="h-4 w-4 text-fb-text-secondary" />
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-fb-text text-fb-base leading-relaxed">{post.content}</p>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="px-4 pb-3">
          <img
            src={post.image}
            alt="Post content"
            className="w-full rounded-fb-lg"
          />
        </div>
      )}

      {/* Post Stats */}
      <div className="px-4 py-3 border-t border-fb-border">
        <div className="flex items-center justify-between text-fb-text-secondary text-fb-sm">
          <div className="flex items-center space-x-1">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 bg-fb-orange rounded-full border-2 border-white flex items-center justify-center">
                <Heart className="h-2 w-2 text-white fill-current" />
              </div>
            </div>
            <span>{post.likes} people</span>
          </div>
          <div className="flex space-x-4">
            <span className="hover:underline cursor-pointer">{post.comments} comments</span>
            <span className="hover:underline cursor-pointer">{post.shares} shares</span>
          </div>
        </div>
      </div>

      {/* Post Actions */}
      <div className="px-4 py-2 border-t border-fb-border">
        <div className="flex space-x-1">
          <button
            onClick={handleLike}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-fb font-medium transition-colors ${
              post.isLiked
                ? 'text-fb-orange bg-fb-orange bg-opacity-10'
                : 'text-fb-text-secondary hover:bg-fb-gray-100'
            }`}
          >
            {post.isLiked ? (
              <Heart className="h-5 w-5 fill-current" />
            ) : (
              <ThumbsUp className="h-5 w-5" />
            )}
            <span>Like</span>
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-fb font-medium text-fb-text-secondary hover:bg-fb-gray-100 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Comment</span>
          </button>

          <button className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-fb font-medium text-fb-text-secondary hover:bg-fb-gray-100 transition-colors">
            <Share2 className="h-5 w-5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="px-4 py-3 border-t border-fb-border bg-fb-gray-50">
          <form onSubmit={handleComment} className="mb-3">
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="Your profile"
                className="w-8 h-8 rounded-full"
              />
              <input
                type="text"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="flex-1 px-3 py-2 bg-white border border-fb-border rounded-full text-fb-sm focus:outline-none focus:border-fb-orange focus:ring-1 focus:ring-fb-orange"
              />
            </div>
          </form>

          {/* Sample Comments */}
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                alt="Commenter"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1 bg-white p-3 rounded-fb-lg">
                <div className="font-semibold text-fb-text text-fb-sm">Dharma Master Chen</div>
                <p className="text-fb-text text-fb-sm">Beautiful insight! Meditation truly brings clarity to the mind. 🙏</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Post
