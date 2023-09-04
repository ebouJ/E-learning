interface ICoursesTitle {
  title: string;
}

const CoursesTitle: React.FC<ICoursesTitle> = ({ title }) => {
  return (
    <div className='flex flex-wrap gap-8 justify-between items-center '>
      <b className='relative tracking-[-0.5px] text-4xl sm:text-5xl md:text-6xl leading-[70px] inline-block h-[57px] shrink-0'>
        <span>{title}</span>
        <span className='text-mediumpurple-100 ml-4'>Courses</span>
      </b>
    </div>
  );
};

export default CoursesTitle;
