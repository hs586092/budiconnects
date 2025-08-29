export type PostType = 'job' | 'seeker' | 'community';

export interface User {
  id: string;
  name: string;
  avatar: string;
  verified?: boolean;
}

export interface Post {
  // 공통 필드
  id: string;
  type: PostType;
  author: User;
  content: string;
  createdAt: Date;
  likes: number;
  comments: number;
  isLiked: boolean;

  // job 타입 (채용공고)
  title?: string;
  company?: string;
  location?: string;
  salary?: string;
  skills?: string[];

  // seeker 타입 (구직글)
  desired_position?: string;
  experience?: string;
  expected_salary?: string;
  portfolio?: string;
}

export const postTypes = {
  job: {
    label: '채용공고',
    icon: 'Briefcase',
    color: 'blue',
    placeholder: 'Share a job opening with the community...',
    fields: ['title', 'company', 'location', 'salary', 'skills']
  },
  seeker: {
    label: '구직글',
    icon: 'UserSearch',
    color: 'green',
    placeholder: 'Share your professional profile...',
    fields: ['desired_position', 'experience', 'skills', 'expected_salary']
  },
  community: {
    label: '커뮤니티',
    icon: 'Heart',
    color: 'orange',
    placeholder: "What's on your mind about Buddhism and mindfulness?",
    fields: ['content']
  }
} as const;
