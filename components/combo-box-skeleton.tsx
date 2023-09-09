import Skeleton from '@/components/e-learning-skeleton';

const ComboBoxSkeleton: React.FC = () => {
  return (
    <div className='w-[200px] items-center'>
      <Skeleton className='w-[150px] h-10' />
    </div>
  );
};

export default ComboBoxSkeleton;
