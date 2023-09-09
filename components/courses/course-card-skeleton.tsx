import Skeleton from '@/components/e-learning-skeleton';

const CourseCardSkeleton = () => {
  return (
    <div className='w-full max-w-screen-md shadow-lg transform transition-transform'>
      <Skeleton className='w-full h-[268px]' />

      <div className='flex flex-col gap-4 p-8'>
        {/* Lessons and Badge */}
        <div className='flex justify-between'>
          <div className='flex gap-2 h-8 items-center justify-center'>
            <Skeleton className='w-8 h-8 rounded-full' />
            <Skeleton className='w-16 h-4' />
          </div>
          <Skeleton className='w-10 h-4' />
        </div>

        {/* Course Title */}
        <Skeleton className='w-full h-10' />

        {/* Instructor and Students */}
        <div className='h-[98px]'>
          <Skeleton className='h-0.5' />
          <div className='flex justify-between items-center h-full'>
            <div className='flex items-center space-x-4'>
              <Skeleton className='w-10 h-10 rounded-full' />
              <Skeleton className='w-24 h-10' />
            </div>
            <Skeleton className='w-10 h-4' />
          </div>
          <Skeleton className='h-0.5' />
        </div>
      </div>

      {/* Card Footer */}
      <div className='flex justify-between p-5'>
        <Skeleton className='w-16 h-8' />
        <Skeleton className='w-24 h-10' />
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
