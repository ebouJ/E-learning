import Skeleton from '@/components/e-learning-skeleton';

interface ICourseContentSkeleton {
  noToGenerate: number;
  className?: string;
}

const CourseContentSkeleton: React.FC<ICourseContentSkeleton> = ({
  noToGenerate,
  className,
}) => {
  return (
    <div className={className}>
      {/* Course Content Title */}
      <div>
        <b className='relative tracking-[-0.5px] text-3xl leading-[60px]  h-[57px]'>
          <Skeleton className='w-1/3 h-12' />
        </b>
      </div>

      <div>
        {/* Simulate a few Accordion Items */}
        {[...Array(noToGenerate)].map((_, index) => (
          <div key={index} className='border p-4 my-2'>
            {/* Accordion Title */}
            <div className='flex justify-between w-full '>
              <div className='flex w-full'>
                <Skeleton className='w-6 h-8' />
                <Skeleton className='w-1/2 h-8 ml-2' />
              </div>
              <Skeleton className='w-16 h-4' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContentSkeleton;
