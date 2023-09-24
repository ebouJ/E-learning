import { format } from 'date-fns';
import { Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import WrapFormInput from '@/components/wrap-form-input';
import Combobox from '../combo-box';
import { FRAMEWORKS, PROJECTS } from '@/constants';
import { Button } from '../ui/button';
import CourseSectionAdd from './section-form';

import { useFieldArray } from 'react-hook-form';
import UploadImage from '@/components/upload-image';

interface IProps {
  form: any;
}

const CreateCourseForm: React.FC<IProps> = ({ form }) => {
  const { fields, append, remove } = useFieldArray({
    name: 'sections',
    control: form.control,
  });

  return (
    <div className='flex items-center flex-col md:w-[700px] w-full'>
      <UploadImage />
      <div className='w-full relative grid grid-cols-1 place-items-center gap-4 p-4'>
        <WrapFormInput form={form} name='courseName' labelName='Course Name'>
          {(field) => (
            <Input
              {...field}
              className='p-4 w-full md:max-w-none  border-none md:w-[calc(100%-16px)]  h-[35px] bg-lightgray-100'
            />
          )}
        </WrapFormInput>
        <WrapFormInput
          form={form}
          name='courseDescription'
          labelName='Course Description'
        >
          {(field) => (
            <Textarea
              {...field}
              className='bg-lightgray-100'
              placeholder='Type your course description here.'
            />
          )}
        </WrapFormInput>
        <WrapFormInput
          form={form}
          name='projectDemoUrl'
          labelName='Demo Video URL'
        >
          {(field) => (
            <Input
              {...field}
              className='p-4 w-full md:max-w-none  border-none md:w-[calc(100%-16px)]  h-[35px] bg-lightgray-100'
            />
          )}
        </WrapFormInput>
        <WrapFormInput form={form} name='project' labelName='Select Project'>
          {(field) => (
            <Combobox
              data={PROJECTS}
              value={field.value}
              setValue={field.onChange}
              placeholder='Choose Project'
              popoverClassName='bg-white'
              buttonClassName='p-4 w-full md:max-w-none max-w-[351px] md:w-[calc(100%-16px)] box-content border-none rounded-2xl h-[35px] border flex items-center bg-white'
            />
          )}
        </WrapFormInput>
        <WrapFormInput
          form={form}
          name='framework'
          labelName='Select Framework'
        >
          {(field) => (
            <Combobox
              data={FRAMEWORKS}
              value={field.value}
              setValue={field.onChange}
              placeholder='Choose Framework'
              popoverClassName='bg-white'
              buttonClassName='p-4 w-full md:max-w-none max-w-[351px] md:w-[calc(100%-16px)] box-content border-none rounded-2xl h-[35px] border flex items-center bg-white'
            />
          )}
        </WrapFormInput>
        {fields.map((field) => (
          <CourseSectionAdd
            fields={fields}
            key={field.id}
            id={field.id}
            form={form}
            removeSection={remove}
          />
        ))}
        <div className='flex w-full justify-end'>
          <Button
            onClick={() => append({ sectionName: '', sectionVideoList: [] })}
          >
            <Plus className='mr-2 h-4 w-4' /> Add New Section
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCourseForm;
