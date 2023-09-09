import ComboBoxSkeleton from '@/components/combo-box-skeleton';
import CoursesSkeleton from '@/components/courses/courses-skeleton';
import SearchInputSkeleton from '@/components/search-input-skeleton';

const Loading = () => {
  return (
    <div className='flex w-full flex-col gap-5'>
      <div className='flex gap-5 items-center'>
        <div className='max-w-[600px] w-full'>
          <SearchInputSkeleton />
        </div>
        <ComboBoxSkeleton />
      </div>
      <CoursesSkeleton />
    </div>
  );
};

export default Loading;
