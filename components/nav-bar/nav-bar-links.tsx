'use client';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { NAV_LINK } from '@/types';

interface INavBarLinks {
  links: NAV_LINK[];
  className?: string;
}

const NavBarLinks: React.FC<INavBarLinks> = ({ links, className }) => {
  return (
    <NavigationMenu className={cn('hidden md:flex', className)}>
      <NavigationMenuList className={className}>
        {links.map(({ id, name }) => {
          return (
            <NavigationMenuItem key={id}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBarLinks;
