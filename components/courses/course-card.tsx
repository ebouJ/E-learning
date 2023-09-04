import { Card, CardContent, CardFooter } from '@/components/ui/card';
import CourseImage from '@/public/course-image.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Play } from 'lucide-react';
import Rating from './rating';

const CourseCard = () => {
  return (
    <Card className='bg-[#381D74] dark text-white w-full max-w-[520px] shadow-lg transform translate-transform hover:scale-105'>
      <Image width={520} height={268} src={CourseImage} alt='Course Image' />
      <CardContent className='flex flex-col gap-10 pt-8'>
        <div className='flex justify-between'>
          <div className='flex gap-2 h-8 items-center justify-center '>
            <div className='w-8 h-full rounded-full grid place-items-center bg-[#7966EA]'>
              <Play />
            </div>
            <span>{`10x Lessons`}</span>
          </div>
          <Badge variant={'default'}>Design</Badge>
        </div>
        <b className='text-11xl leading-[30px] inline-block'>
          Express Backend Full Course
        </b>
        <div className='h-[98px]'>
          <hr className='bg-white h-0.5' />
          <div className='flex justify-between items-center h-full'>
            <div className='flex items-center space-x-4'>
              <Avatar>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@shadcn'
                />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div>
                <p className='text-lg font-medium leading-none'>Ebou Jobe</p>
                <p className='text-sm text-muted-foreground'>Developer</p>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <p>100+</p>
              <p>Students</p>
            </div>
          </div>
          <hr className='bg-white h-0.5' />
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Rating rating={4.6} isReadOnly />
        <Button variant={'courseAppBtn'}>Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
