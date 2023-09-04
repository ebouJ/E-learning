import AuthNavButtons from './auth-nav-button';
import SignInRightNav from './sign-in-right-nav';

const NavBarRight = () => {
  const authenticated = Math.floor(Math.random() * 2) === 1;
  return <div>{authenticated ? <AuthNavButtons /> : <SignInRightNav />}</div>;
};

export default NavBarRight;
