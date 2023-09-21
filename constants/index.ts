import { NAV_LINK } from '@/types';

export const NAV_BAR_ITEMS: NAV_LINK[] = [
  {
    id: '1',
    name: 'Home',
    path: '/',
  },
  {
    id: '2',
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    id: '1',
    name: 'Courses',
    path: '/courses',
  },
  {
    id: '1',
    name: 'Blog',
    path: '/blogs',
  },
  {
    id: '1',
    name: 'Contact',
    path: '/contact',
  },
];

export const SELLING_POINTS: {
  id: number;
  title: string;
  body: string;
}[] = [
  {
    id: 1,
    title: 'Multi-Framework Mastery',
    body: 'Unlike many courses that focus on just one backend framework, we dive deep into multiple ones. Build the same project using Express, Spring Boot, and FastAPI, and discover the nuances of each.',
  },
  {
    id: 2,
    title: 'Tailored Learning Path',
    body: "Recognizing that every learner is different, our content is structured to cater to both beginners and seasoned developers. Whether you're starting out or looking to refine existing skills, there's content tailored for you.",
  },
  {
    id: 3,
    title: 'Hands-On Approach',
    body: "Theory is essential, but practical application cements knowledge. Our courses are designed with a bias towards action. You won't just learn, you'll do.",
  },
  {
    id: 4,
    title: 'Thought Process Unveiled',
    body: "More than just coding, understanding the 'why' behind decisions can be pivotal. I walk you through my thought processes in detail, ensuring you grasp the deeper reasoning behind each line of code and architectural choice.",
  },
  {
    id: 5,
    title: 'Community & Support',
    body: 'Engage with a community of passionate learners and experts. Get your queries addressed, share your projects, and grow together',
  },
];

export const FRAMEWORKS = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'next_js',
    label: 'Next.js',
  },
  {
    value: 'spring_boot',
    label: 'Spring Boot',
  },
  {
    value: 'express_js',
    label: 'Express JS',
  },
  {
    value: 'fast_api',
    label: 'Fast API',
  },
];

// should be coming from the api
export const PROJECTS = [
  {
    value: 'course_management_app',
    label: 'Course Management App',
  },
  {
    value: 'e_commerce',
    label: 'E Commerce',
  },
  {
    value: 'sports_league',
    label: 'Sports League Management',
  },
];
