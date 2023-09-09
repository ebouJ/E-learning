import CourseContentSkeleton from '@/components/course-details/course-content-skeleton';
import Skeleton from '@/components/e-learning-skeleton';

const Loading = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[30%_1fr] w-full h-[80vh] md:h-[85vh] overflow-hidden'>
      <CourseContentSkeleton noToGenerate={15} className='w-full pr-5' />
      <div className='w-full h-full pt-[60px]'>
        <Skeleton className='w-full h-full' />
      </div>
    </div>
  );
};

export default Loading;
