import { generateCourses } from '@/test-data';
import Courses from '../courses/courses';

const courses = generateCourses(4);

const InstructorCourses = () => {
  return (
    <div>
      <Courses courses={courses} isInstructor />
    </div>
  );
};

export default InstructorCourses;
