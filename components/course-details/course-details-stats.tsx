import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const COURSE_STATS = [
  {
    id: '1',
    title: 'Hours of Course',
    statCount: '45,231',
  },
  {
    id: '2',
    title: 'Students Enrolled',
    statCount: '23,345',
  },
  {
    id: '3',
    title: 'Total Assets',
    statCount: '25,231',
  },
  {
    id: '4',
    title: 'Video Lessons',
    statCount: '45,231',
  },
];

const CourseDetailsStats = () => {
  return (
    <section className='grid min-h-[184px] gap-5 md:justify-center w-full grid-cols-[repeat(auto-fit,_minmax(auto,_300px))]'>
      {COURSE_STATS.map(({ id, statCount, title }) => (
        <Card className='dark border-none bg-inherit' key={id}>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-lg font-medium'>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold'>{`${statCount}+`}</div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default CourseDetailsStats;
