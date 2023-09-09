import ELearningSkeleton from '@/components/e-learning-skeleton';

const CourseDetailsHeroELearningSkeleton = () => {
  return (
    <section className='min-h-[510px] h-full md:grid-cols-2 grid grid-cols-1 items-center gap-5'>
      {/* Left side */}
      <div className='flex h-full flex-col gap-5 md:pb-0 justify-around'>
        {/* Course Name */}
        <div className='relative tracking-[-0.5px] text-3xl md:text-5xl md:leading-[60px] leading-[40px] min-h-[57px]'>
          <ELearningSkeleton className='w-full h-12 md:h-16' />
        </div>

        {/* Course Description */}
        <div className='relative pt-10 leading-[30px]'>
          <ELearningSkeleton className='w-full h-6' />
          <ELearningSkeleton className='w-4/5 h-6 mt-2' />
          <ELearningSkeleton className='w-3/4 h-6 mt-2' />
        </div>

        {/* Rating and Button */}
        <div className='flex gap-6 items-center'>
          <div className='flex gap-1'>
            <ELearningSkeleton className='w-6 h-6 rounded-full' />
            <ELearningSkeleton className='w-36 h-4' />
          </div>
          <ELearningSkeleton className='w-40 h-14' />
        </div>
      </div>

      {/* Right side for video */}
      <div className='w-full h-[200px] md:h-[400px]'>
        <ELearningSkeleton className='w-full h-full' />
      </div>
    </section>
  );
};

export default CourseDetailsHeroELearningSkeleton;
