'use client';

import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import React, { useEffect, useState } from 'react';

interface Iprops {
  value: string;
  placeholder?: string;
  notFoundText?: string;
  variant?: ButtonProps['variant'];
  data: any[];
  itemClassName?: string;
  groupClassName?: string;
  buttonClassName?: string;
  popoverClassName?: string;
  searchPlaceholder?: string;
  setValue: (val: string) => void;
}

const Combobox: React.FC<Iprops> = ({
  data,
  value,
  setValue,
  itemClassName = '',
  groupClassName = '',
  buttonClassName = '',
  popoverClassName = '',
  placeholder = 'Select',
  notFoundText = 'Not Found',
  searchPlaceholder = 'Search',
  variant = 'default',
}) => {
  const [open, setOpen] = React.useState(false);

  const [hasmounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasmounted) {
    return null;
  }

  const onSelect = (currentValue: string) => {
    setValue(currentValue === value ? '' : currentValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={variant}
          role='combobox'
          aria-expanded={open}
          className={cn('w-[200px] justify-between', buttonClassName)}
        >
          {value
            ? data.find((item) => item.value === value)?.label
            : placeholder}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn('w-[400px] p-0', popoverClassName)}>
        <Command>
          <CommandInput placeholder={searchPlaceholder} className='h-8' />
          <CommandEmpty>{notFoundText}</CommandEmpty>
          <CommandGroup className={groupClassName}>
            {data.map((item) => (
              <CommandItem
                key={item.value}
                onSelect={() => onSelect(item.value)}
                className={itemClassName}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === item.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
