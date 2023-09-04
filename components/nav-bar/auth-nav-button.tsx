import { Button } from '../ui/button';

const AuthNavButtons = () => {
  return (
    <div className='flex gap-5'>
      <Button className='rounded-3xl min-w-[100px]' variant='outline'>
        Login
      </Button>
      <Button className='rounded-3xl min-w-[100px]' variant='courseAppBtn'>
        Get Started
      </Button>
    </div>
  );
};

export default AuthNavButtons;
