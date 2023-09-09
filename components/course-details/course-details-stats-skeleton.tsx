import Skeleton from '@/components/e-learning-skeleton';

const CourseDetailsStatsSkeleton = () => {
  return (
    <section className='grid min-h-[184px] gap-5 md:justify-center w-full grid-cols-[repeat(auto-fit,_minmax(auto,_300px))]'>
      {[1, 2, 3, 4].map((_, index) => (
        <div key={index} className='border-none bg-inherit p-4'>
          {/* Card Header */}
          <div className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <Skeleton className='w-24 h-6' />
          </div>

          {/* Card Content */}
          <div className='text-3xl font-bold'>
            <Skeleton className='w-16 h-10' />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CourseDetailsStatsSkeleton;
