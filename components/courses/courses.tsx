import CourseCard from './course-card';

const Courses = () => {
  return (
    <section className='flex flex-col w-full'>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(auto,_520px))] gap-5 justify-center'>
        {[...Array(9)].map((index) => (
          <CourseCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
