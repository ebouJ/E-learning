import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import WrapFormInput from '@/components/wrap-form-input';
import { useFieldArray } from 'react-hook-form';

import { Trash, Trash2 } from 'lucide-react';

interface ICourseSectionAdd {
  form?: any;
  fields: any;
  id: string;
  removeSection: (index: number) => void;
}

const CourseSectionAdd: React.FC<ICourseSectionAdd> = ({
  form,
  fields,
  id,
  removeSection,
}) => {
  const mainIndex = fields.findIndex((field: any) => field.id === id);

  const {
    fields: sectionVideoListFields,
    append,
    remove,
  } = useFieldArray({
    name: `sections.${mainIndex}.sectionVideoList`,
    control: form.control,
  });

  return (
    <div className='w-full'>
      <WrapFormInput
        form={form}
        name={`sections.${mainIndex}.sectionName`}
        labelName='Section Name'
      >
        {(field) => (
          <div className='flex relative justify-between items-center'>
            <Input
              {...field}
              className='p-4 w-full md:max-w-none  border-none md:w-[calc(100%-16px)]  h-[35px] bg-lightgray-100'
            />
            <Button
              variant={'destructive'}
              className='absolute bottom-12 right-0'
              onClick={() => removeSection(mainIndex)}
            >
              <Trash className='mr-2 h-4 w-4' /> Delete Section
            </Button>
          </div>
        )}
      </WrapFormInput>
      {
        <>
          {sectionVideoListFields.map((field, index) => (
            <>
              <WrapFormInput
                form={form}
                key={field.id}
                name={`sections.${mainIndex}.sectionVideoList.${index}.title`}
                labelName={`Add Title`}
              >
                {(field) => (
                  <div className='flex justify-between items-center'>
                    <Input
                      {...field}
                      className='p-4 text-black w-full md:max-w-none  border-none md:w-[calc(100%-16px)]  h-[35px] bg-lightgray-100'
                    />
                    <Button variant={'link'} onClick={() => remove(index)}>
                      <Trash2 className='pl-2' color='#d40000' />
                    </Button>
                  </div>
                )}
              </WrapFormInput>
              <WrapFormInput
                form={form}
                key={field.id}
                name={`sections.${mainIndex}.sectionVideoList.${index}.url`}
                labelName={`Add url`}
              >
                {(field) => (
                  <div className='flex justify-between items-center'>
                    <Input
                      {...field}
                      className='p-4 text-black w-full md:max-w-none  border-none md:w-[calc(100%-16px)]  h-[35px] bg-lightgray-100'
                    />
                    <Button variant={'link'} onClick={() => remove(index)}>
                      <Trash2 className='pl-2' color='#d40000' />
                    </Button>
                  </div>
                )}
              </WrapFormInput>
            </>
          ))}
          <Button
            type='button'
            variant='default'
            size='sm'
            className='mt-4'
            onClick={() => append({ url: '', title: '' })}
          >
            Add Sub Section
          </Button>
        </>
      }
    </div>
  );
};

export default CourseSectionAdd;
