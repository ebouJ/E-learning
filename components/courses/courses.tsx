import { Course } from '@/types';
import CourseCard from './course-card';

interface CoursesProps {
  courses: Course[];
}

const Courses: React.FC<CoursesProps> = ({ courses }) => {
  return (
    <section className='flex flex-col w-full'>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(auto,_520px))] gap-5 justify-center'>
        {courses.map((course) => (
          <CourseCard course={course} key={course.course_id} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
