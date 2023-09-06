import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import CourseImage from '@/public/course-image.png';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Post } from '@/.contentlayer/generated';
import Link from 'next/link';

interface IBlogCard {
  post: Post;
}

const BlogCard: React.FC<IBlogCard> = ({ post }) => {
  return (
    <Link href={`blogs/${post.slug}`}>
      <Card className='bg-[#381D74] min-h-[420px] dark text-white w-full shadow-lg transform transition-transform hover:scale-105'>
        <Image width={420} height={268} src={CourseImage} alt='Course Image' />
        <CardHeader className='h-[80px] '>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent className=' h-full md:h-[150px]'>
          <CardDescription className='line-clamp-6'>
            {post.description}
            {post.description}
            {post.description}
            {post.description}
            {post.description}
          </CardDescription>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <div className='flex items-center space-x-4'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-lg font-medium leading-none'>{post.author}</p>
              <p className='text-sm text-muted-foreground'>Developer</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
