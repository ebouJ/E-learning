'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Rating from '@/components/courses/rating';
import React, { useEffect, useState } from 'react';

const TestimonialCard = () => {
  const [hasmounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasmounted) {
    return null;
  }

  return (
    <Card className='w-[1045px] gap-8 bg-[#381D74] dark h-auto md:h-[420px] p-10'>
      <CardHeader>
        <div className='flex justify-between'>
          <div className='flex items-center space-x-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-lg font-medium leading-none'>Ebou Jobe</p>
              <p className='text-sm text-muted-foreground'>Developer</p>
            </div>
          </div>
          <Rating rating={5} isReadOnly />
        </div>
      </CardHeader>
      <hr className='bg-white h-0.5' />
      <CardContent className='pt-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
