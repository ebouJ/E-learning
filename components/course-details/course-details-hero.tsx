import { Star } from 'lucide-react';
import { Button } from '../ui/button';
import Video from '../video';
import Link from 'next/link';

interface ICourseDetailsHero {
  course_name: string;
  course_id: string;
  course_description: string;
  average_rating: number;
  total_reviews: number;
  demo_video_id: string;
  demo_video_host?: 'vimeo' | 'youtube';
}

const CourseDetailsHero: React.FC<ICourseDetailsHero> = ({
  course_description,
  course_name,
  average_rating,
  total_reviews,
  demo_video_id,
  demo_video_host,
  course_id,
}) => {
  return (
    <section className='min-h-[510px] h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-5'>
      <div className='flex h-full flex-col gap-5 md:pb-0 justify-around'>
        <>
          <b className='relative tracking-[-0.5px] text-3xl md:text-5xl md:leading-[60px] leading-[40px]  min-h-[57px]'>
            <span>{course_name}</span>
          </b>
        </>
        <div className='relative pt-10 leading-[30px]'>
          <span>{course_description}</span>
        </div>
        <div className='flex gap-6 items-center'>
          <div className='flex gap-1'>
            <Star fill='#ff0' />
            <span>{`${average_rating} (${total_reviews} Ratings) - Published by Ebou Jobe`}</span>
          </div>
          <Button className='w-40 h-14' variant={'courseAppBtn'}>
            Enroll Now
          </Button>
          <Link href={`${course_id}/learn`}>
            <Button className='w-40 h-14' variant={'courseAppBtn'}>
              Go to Course
            </Button>
          </Link>
        </div>
      </div>
      <Video id={demo_video_id} videoHost={demo_video_host || 'vimeo'} />
    </section>
  );
};

export default CourseDetailsHero;
