import { Overview } from './overview';
import RecentSales from './recent-sales';
import DashboardStat from './dashboard-stat';
import { BadgeCent, DollarSign, User2 } from 'lucide-react';
import DashboardCard from './dashboard-card';
import { generateFakeSales } from '@/test-data';

const DASHBOARD_STATS = [
  {
    id: '1',
    title: 'Total Revenue',
    stat: '$45,231.89',
    desc: '+20.1% from last month',
    icon: <DollarSign />,
  },
  {
    id: '2',
    title: 'Total Students',
    stat: '23,542',
    desc: '+22.1% from last month',
    icon: <User2 />,
  },
  {
    id: '3',
    title: 'Sales',
    stat: '$45,231.89',
    desc: '+48.1% from last month',
    icon: <BadgeCent />,
  },
  {
    id: '4',
    title: 'Total Revenue',
    stat: '$45,231.89',
    desc: '+20.1% from last month',
    icon: <BadgeCent />,
  },
];

const sales = generateFakeSales(8);

const DashboardOverView = () => {
  return (
    <>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {DASHBOARD_STATS.map(({ id, title, stat, desc, icon }) => (
          <DashboardStat
            key={id}
            title={title}
            stat={stat}
            desc={desc}
            icon={icon}
          />
        ))}
      </div>
      <div className='grid gap-4 grid-cols-1 lg:grid-cols-[1fr_2fr]'>
        <DashboardCard
          title='Recent Sales'
          desc='You made 265 sales this month.'
          content={<RecentSales recentSales={sales} />}
        />
        <DashboardCard title='Overview' content={<Overview />} />
      </div>
    </>
  );
};

export default DashboardOverView;
