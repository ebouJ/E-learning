import { NAV_BAR_ITEMS } from '@/constants';
import NavBarLinks from './nav-bar-links';
import NavBarRight from './nav-bar-right';
import ResponsiveNavSidebar from './responsive-sidebar-nav';

const NavBar = () => {
  return (
    <div>
      <div className='flex justify-between items-center h-20'>
        <div>Logo</div>
        <NavBarLinks links={NAV_BAR_ITEMS} />
        <div className='hidden md:flex'>
          <NavBarRight />
        </div>
        <div className='flex md:hidden'>
          <ResponsiveNavSidebar />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
