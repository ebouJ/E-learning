'use client';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Input } from './ui/input';
import React, { useEffect, useState } from 'react';

interface ISearchInput {
  inputClassName?: string;
  buttonClassName?: string;
  inputPlaceHolder?: string;
  handleSearch: () => void;
  onInputChanged: (event: string) => void;
}

const SearchInput: React.FC<ISearchInput> = ({
  inputPlaceHolder = 'Search',
  handleSearch,
  onInputChanged,
  inputClassName,
  buttonClassName,
}) => {
  const [hasmounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasmounted) {
    return null;
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div className='flex relative items-center space-x-2 w-full'>
      <Input
        className={cn(
          'bg-white font-medium text-lg text-black',
          inputClassName
        )}
        type='text'
        onKeyDown={handleKeyDown}
        onChange={(event) => onInputChanged(event.target.value)}
        placeholder={inputPlaceHolder}
      />
      <Button
        className={cn(
          'absolute right-2 h-auto rounded-[48px] w-auto',
          buttonClassName
        )}
        variant={'courseAppBtn'}
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
