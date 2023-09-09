import { generateCourses } from '@/test-data';
import CourseContent from '@/components/course-details/course-content';
import CourseDetailsHero from '@/components/course-details/course-details-hero';

import CourseDetailsStats from '@/components/course-details/course-details-stats';

interface ICourseDetail {
  params: { courseId: string };
}

const courses = generateCourses(1);

const CourseDetail: React.FC<ICourseDetail> = (props) => {
  console.log({ props });
  const course = courses[0];

  return (
    <section className='flex flex-col gap-10 pb-10'>
      <CourseDetailsHero
        course_name={course.course_name}
        course_id={course.course_id}
        course_description={course.description}
        average_rating={course.average_rating}
        demo_video_id={'858853119'}
        total_reviews={3125}
      />
      <CourseDetailsStats />
      <CourseContent sections={course.sections} />
    </section>
  );
};

export default CourseDetail;
