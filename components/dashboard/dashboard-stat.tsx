import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

interface DashboardStatProps {
  title: string;
  stat: string;
  desc: string;
  icon: JSX.Element;
}

const DashboardStat: React.FC<DashboardStatProps> = ({
  title,
  stat,
  desc,
  icon,
}) => {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium text-white'>
          {title}
        </CardTitle>
        <div className='text-muted'>{icon}</div>
      </CardHeader>
      <CardContent className='text-white'>
        <div className='text-2xl font-bold'>{stat}</div>
        <p className='text-xs text-muted'>{desc}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardStat;
