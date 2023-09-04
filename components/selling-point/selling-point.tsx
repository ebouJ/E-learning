import { SELLING_POINTS } from '@/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import StatImage from '@/public/stat-image.svg';
import Stat from './stat';
import { GraduationCap, User2, Video } from 'lucide-react';

const STATS = [
  {
    id: 1,
    icon: <Video />,
    stateCount: 10000,
    title: 'Videos',
  },
  {
    id: 2,
    icon: <GraduationCap />,
    stateCount: 350000,
    title: 'Students',
  },
  {
    id: 3,
    icon: <User2 />,
    stateCount: 125000,
    title: 'Users',
  },
];

const SellingPoint = () => {
  return (
    <div className='flex justify-between flex-wrap'>
      <div className='max-w-[690px] w-full flex flex-col'>
        <div className='flex flex-row items-start justify-start text-[30px] sm:text-[40px] md:text-[60px] font-text-lg-semibold lg:flex-col'>
          <b className='relative tracking-[-0.5px] leading-8 sm:leading-10 md:leading-[70px] h-full min-h-[125px]'>
            Unparalleled Course
            <span className='text-mediumpurple-100'>{' Distinction'}</span>
          </b>
        </div>
        <Accordion type='multiple'>
          {SELLING_POINTS.map(({ id, title, body }) => (
            <AccordionItem key={id} value={`${id}`}>
              <AccordionTrigger className='text-mediumpurple-100 text-lg font-bold'>
                {title}
              </AccordionTrigger>
              <AccordionContent>{body}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Image
        src={StatImage}
        height={757}
        width={478}
        alt='Stat Image'
        className='hidden lg:flex'
      />
      <div className='flex flex-col gap-10 p-10 items-center'>
        {STATS.map(({ id, title, icon, stateCount }) => (
          <Stat
            key={`${id}`}
            title={title}
            icon={icon}
            statCount={stateCount}
          />
        ))}
      </div>
    </div>
  );
};

export default SellingPoint;
