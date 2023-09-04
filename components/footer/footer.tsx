import { NAV_LINK } from '@/types';
import Link from 'next/link';

interface IFooter {
  links: NAV_LINK[];
}

const Footer: React.FC<IFooter> = ({ links }) => {
  return (
    <div>
      <hr />
      <div className='grid justify-center pt-5 gap-8 grid-cols-[repeat(auto-fit,_minmax(auto,_350px))]'>
        <div className='flex flex-col gap-5 justify-center'>
          <p className='font-bold text-2xl'>Logo</p>
          <p>
            Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.{' '}
          </p>
        </div>
        <div className='flex flex-col gap-5 items-center'>
          <p className='font-bold text-2xl'>Quick Links</p>
          <div className='grid grid-cols-2 gap-5'>
            {links.map((link) => (
              <Link href={link.path} key={link.id}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-5 items-center'>
          <p className='font-bold text-2xl'>Get In Touch</p>
          <div className='flex flex-col'>
            <span>Email: info@tectteachwithebou.com</span>
            <span>Phone: +14385586814</span>
          </div>
        </div>
        <div className='flex flex-col  gap-5 items-center'>
          <span className='font-bold text-2xl'>Location</span>
          <div>
            <>Vancouver, Canada</>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
