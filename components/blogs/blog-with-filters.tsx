'use client';

import { Post } from '@/.contentlayer/generated';
import Combobox from '@/components/combo-box';
import BlogCard from './blog-card';
import React, { useEffect, useState } from 'react';
import { FRAMEWORKS } from '@/constants';
import { allPosts } from '@/.contentlayer/generated';
import SearchInput from '@/components/search-input';

const BlogWithFilters = () => {
  const [value, setValue] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [hasmounted, setHasMounted] = useState(false);
  const [blogs, setBlogs] = React.useState<Post[]>([...allPosts, ...allPosts]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!searchTerm.length) {
      setBlogs([...allPosts, ...allPosts]);
    }
  }, [searchTerm]);

  if (!hasmounted) {
    return null;
  }

  const handleSearch = () => {
    const includes = (text: string, term: string) =>
      text.toLowerCase().includes(term.toLowerCase());
    const filteredBlogs = allPosts.filter(
      (blog) =>
        includes(blog.title || '', searchTerm) ||
        includes(blog.description || '', searchTerm)
    );

    setBlogs(filteredBlogs);
  };

  return (
    <div className='flex flex-col gap-5 flex-grow min-h-[80vh]'>
      <div className='flex gap-5 items-center text-white'>
        <div className='max-w-[600px] w-full'>
          <SearchInput
            handleSearch={handleSearch}
            onInputChanged={setSearchTerm}
            inputPlaceHolder='Search blogs'
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
      <div
        className='grid mt-3 justify-center md:justify-start grid-cols-[repeat(auto-fit,_minmax(auto,_320px))] gap-4 w-full'
        suppressHydrationWarning
      >
        {blogs.map((post, index) => {
          return (
            <div key={post._id}>
              <article key={index}>
                <BlogCard post={post} />
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogWithFilters;
