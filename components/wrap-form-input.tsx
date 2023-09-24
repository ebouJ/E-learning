import React, { ReactElement } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { cn } from '@/lib/utils';

interface IWrapFormInput {
  name: string;
  form: any;
  labelName: string;
  className?: string;
  children: (field: ControllerRenderProps<FieldValues, string>) => ReactElement;
}

const WrapFormInput: React.FC<IWrapFormInput> = ({
  name,
  form,
  children,
  labelName,
  className,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn('w-full relative pb-5 flex flex-col gap-2', className)}
        >
          <FormLabel className='text-base not-italic font-normal leading-[normal] tracking-[0.08px]'>
            {labelName}
          </FormLabel>
          <FormControl className='text-black'>{children(field)}</FormControl>
          <FormMessage className='text-red absolute bottom-0 text-xs' />
        </FormItem>
      )}
    />
  );
};

export default WrapFormInput;
