import { Button } from '../ui/button';

const JoinPlatForm = () => {
  return (
    <div className='flex justify-evenly flex-wrap gap-5 items-center'>
      <div className='max-w-[997px] w-full flex  gap-4 flex-col'>
        <div className='flex flex-row items-start justify-start text-[35px] font-text-lg-semibold lg:flex-col'>
          <b className='relative tracking-[-0.5px] leading-[50px] md:leading-[60px] h-full min-h-[125px]'>
            <span className='text-mediumpurple-100'>
              {'Ready to supercharge your development journey? '}
            </span>
            Dive into our diverse courses, gain multi-framework expertise, and
            become a part of our thriving developer community. Your path to
            mastering frontend and backend development starts here.
          </b>
        </div>
      </div>
      <div className='flex md:flex-col flex-wrap gap-6'>
        <Button
          className='w-[250px] h-[60px] rounded-full bg-[#FF5156]'
          variant={'destructive'}
        >
          Join as Instructor
        </Button>
        <Button
          className='w-[250px] h-[60px] rounded-full'
          variant={'courseAppBtn'}
        >
          Join as Student
        </Button>
      </div>
    </div>
  );
};

export default JoinPlatForm;
