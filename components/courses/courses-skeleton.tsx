import CourseCardSkeleton from './course-card-skeleton';

const CoursesSkeleton = () => {
  return (
    <div className='grid justify-center grid-cols-[repeat(auto-fit,_minmax(auto,_520px))] gap-x-6 gap-y-10 w-full'>
      {[...Array(6)].map((id) => (
        <CourseCardSkeleton key={id} />
      ))}
    </div>
  );
};

export default CoursesSkeleton;
