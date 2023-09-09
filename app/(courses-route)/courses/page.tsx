'use client';

import Combobox from '@/components/combo-box';
import Courses from '@/components/courses/courses';
import CoursesTitle from '@/components/courses/course-title';
import SearchInput from '@/components/search-input';
import { FRAMEWORKS } from '@/constants';
import { generateCourses } from '@/test-data';
import { useState } from 'react';

const courses = generateCourses(15);

const CoursesPage = () => {
  const [value, setValue] = useState('all');

  return (
    <div className='flex w-full flex-col gap-5'>
      <CoursesTitle title='All' />
      <div className='flex gap-5 flex-wrap mb-8'>
        <div className='max-w-[600px] w-full'>
          <SearchInput
            handleSearch={() => {}}
            onInputChanged={() => {}}
            inputPlaceHolder='Search Courses'
            inputClassName='h-[60px] rounded-[40px] '
            buttonClassName='h-auto md:h-[55px] md:min-w-[164px]'
          />
        </div>
        <Combobox
          value={value}
          setValue={setValue}
          data={FRAMEWORKS}
          popoverClassName='bg-[#7F56D9] text-white max-w-[200px]'
          buttonClassName='h-[60px]'
          itemClassName='text-white text-lg'
          variant={'courseAppBtn'}
        />
      </div>
      <Courses courses={courses} />
    </div>
  );
};

export default CoursesPage;
