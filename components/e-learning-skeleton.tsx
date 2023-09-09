import { Skeleton as ShadCnSkeleton } from './ui/skeleton';

interface ISkeleton {
  className?: string;
}

const ELearningSkeleton: React.FC<ISkeleton> = ({ className }) => {
  return <ShadCnSkeleton color='#5D527A' className={className} />;
};

export default ELearningSkeleton;
