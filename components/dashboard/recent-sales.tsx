import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Sale = {
  id: string;
  name: string;
  email: string;
  amount: string;
};

interface RecentSalesProps {
  recentSales: Sale[];
}

const RecentSales: React.FC<RecentSalesProps> = ({ recentSales }) => {
  return (
    <div className='space-y-8'>
      {recentSales.map(({ id, name, email, amount }) => (
        <div key={id} className='flex items-center'>
          <Avatar className='h-9 w-9'>
            <AvatarImage src='https://github.com/shadcn.png' alt='Avatar' />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className='ml-4 space-y-1'>
            <p className='text-sm font-medium leading-none'>{name}</p>
            <p className='text-sm'>{email}</p>
          </div>
          <div className='ml-auto font-medium'>{`+${amount}`}</div>
        </div>
      ))}
    </div>
  );
};

export default RecentSales;
