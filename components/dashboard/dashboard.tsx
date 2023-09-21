import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardOverView from './dashboard-overview';
import InstructorCourses from './instructor-courses';

const Dashboard = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
        <span>Add course</span>
      </div>
      <Tabs defaultValue='overview' className='space-y-4 pt-6'>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='courses'>Teaching Catalog</TabsTrigger>
        </TabsList>
        <TabsContent value='overview' className='space-y-4'>
          <DashboardOverView />
        </TabsContent>
        <TabsContent value='courses' className='space-y-4'>
          <InstructorCourses />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
