export type NAV_LINK = {
  id: string;
  path: string;
  name: string;
};

export type Video = {
  video_id: string;
  video_url: string;
  course_id: string;
  section_id?: string;
};

export type SubSection = {
  title: string;
  video: Video;
};

export type Section = {
  section_id: string;
  course_id: string;
  section_title: string;
  sub_sections: SubSection[];
};

export type Course = {
  course_id: string;
  course_name: string;
  instructor_id: string;
  image_url: string;
  category: string;
  demo_video: Video;
  sections: Section[];
  description: string;
  average_rating: number;
};

export type Project = {
  project_id: string;
  project_name: string;
  date_created: Date;
  courses: Course[];
  created_by: string;
};

export type User = {
  user_id: string;
  role: string; // default to 'user'
  date_joined: string;
  courses_purchased: Course[];
};
