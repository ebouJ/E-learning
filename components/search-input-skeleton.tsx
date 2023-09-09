import Skeleton from '@/components/e-learning-skeleton';

const SearchInputSkeleton: React.FC = () => {
  return (
    <div className='flex relative items-center space-x-2 w-full'>
      <Skeleton className='font-medium text-lg  h-[36px] w-full rounded-md' />
      <Skeleton className='absolute right-2 rounded-[48px] w-[80px] h-[36px]' />
    </div>
  );
};

export default SearchInputSkeleton;
