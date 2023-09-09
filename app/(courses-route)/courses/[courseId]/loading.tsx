import CourseContentSkeleton from '@/components/course-details/course-content-skeleton';
import CourseDetailsHeroSkeleton from '@/components/course-details/course-details-hero-skeleton';
import CourseDetailsStatsSkeleton from '@/components/course-details/course-details-stats-skeleton';

const Loading = () => {
  return (
    <div className='flex flex-col gap-10 pb-10'>
      <CourseDetailsHeroSkeleton />
      <CourseDetailsStatsSkeleton />
      <CourseContentSkeleton noToGenerate={10} />
    </div>
  );
};

export default Loading;
