'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import Panel from '../panel';
import CreateCourseForm from './add-course-form';

const formSchema = z.object({
  courseName: z.string().min(2, {
    message: 'Course Name must be at least 2 characters.',
  }),
  courseDescription: z.string().min(2, {
    message: 'Course Description must be at least 2 characters.',
  }),
  projectDemoUrl: z.string().url({ message: 'Please enter a valid URL.' }),
  framework: z.string().min(1, { message: 'You need to Select A Framework' }),
  project: z.string().min(1, { message: 'You need to Select A Project' }),
  sections: z
    .array(
      z.object({
        sectionName: z.string().min(2, {
          message: 'Section name should be at least 2 characters.',
        }),
        sectionVideoList: z
          .array(
            z.object({
              url: z.string().url({ message: 'Please enter a valid URL.' }),
              title: z.string().min(1, {
                message: 'Add a title',
              }),
            })
          )
          .refine((array) => array.length > 0, {
            message: 'Section should contain at least one video url',
          }),
      })
    )
    .refine((array) => array.length > 0, {
      message: 'Minimum section should be one',
    }),
});

const AddCoursePanel = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseName: 'test test',
      courseDescription: '',
      sections: [
        {
          sectionName: '',
          sectionVideoList: [],
        },
      ],
    },
  });

  return (
    <Panel
      form={form}
      headerTitle='Create a Course'
      headerDescription='Create course for users to view'
      submitButtonText='Create Course'
      onSubmit={(values: any) => {
        console.log({ values });
      }}
      triggerElement={
        <Button
          variant={'courseAppBtn'}
          className='h-[50px] rounded-full w-40 '
        >
          Add New Course
        </Button>
      }
    >
      <CreateCourseForm form={form} />
    </Panel>
  );
};

export default AddCoursePanel;
