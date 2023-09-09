import CourseContent from '@/components/course-details/course-content';
import { ScrollArea } from '@/components/ui/scroll-area';
import Video from '@/components/video';
import { generateCourses } from '@/test-data';

const courses = generateCourses(1);

const Learn = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[30%_1fr] w-full h-[80vh] md:h-[85vh] overflow-hidden'>
      <ScrollArea className='w-full h-full'>
        <CourseContent sections={courses[0].sections} className='w-full pr-5' />
      </ScrollArea>
      <div className='w-full h-full pt-[60px]'>
        <Video id={'858853119'} videoHost='vimeo' />
      </div>
    </div>
  );
};

export default Learn;
