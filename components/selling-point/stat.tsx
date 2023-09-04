interface IStat {
  icon: JSX.Element;
  statCount: number;
  title: string;
}

const Stat: React.FC<IStat> = ({ icon, statCount, title }) => {
  return (
    <div className='flex h-14 items-center space-x-4'>
      <div className='w-14 h-full  rounded-full grid place-content-center bg-[#7966EA]'>
        {icon}
      </div>
      <div>
        <p className='text-lg font-bold leading-none'>{`${statCount}+`}</p>
        <p className='text-sm'>{title}</p>
      </div>
    </div>
  );
};

export default Stat;
