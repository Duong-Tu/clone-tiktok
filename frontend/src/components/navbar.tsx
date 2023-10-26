import { Fragment, ReactNode } from 'react';
import { CameraIcon } from '@/icons/camera-icon';
import { CompassIcon } from '@/icons/compass-icon';
import { GroupUserIcon } from '@/icons/group-user-icon';
import { HomeIcon } from '@/icons/home-icon';
import { menus } from '@/utils/menus';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const menuIcon = (isActive: boolean, icon?: string) => {
        switch (icon) {
            case 'HomeIcon':
                return (
                    <HomeIcon
                        width="32"
                        height="32"
                        color={isActive ? '#fe2c55' : '#161823'}
                        isActive={isActive}
                    />
                );

            case 'GroupUserIcon':
                return (
                    <GroupUserIcon
                        width="32"
                        height="32"
                        color={isActive ? '#fe2c55' : '#161823'}
                        isActive={isActive}
                    />
                );

            case 'CompassIcon':
                return (
                    <CompassIcon
                        width="32"
                        height="32"
                        color={isActive ? '#fe2c55' : '#161823'}
                        isActive={isActive}
                    />
                );

            case 'CameraIcon':
                return (
                    <CameraIcon
                        width="32"
                        height="32"
                        color={isActive ? '#fe2c55' : '#161823'}
                        isActive={isActive}
                    />
                );

            default:
                return <Fragment></Fragment>;
        }
    };

    return (
        <nav className="menu">
            <ul className="menu-list">
                {menus.map((menuItem) => {
                    return (
                        <li key={menuItem.key}>
                            <Link
                                href={menuItem.pathname}
                                className={`${
                                    !(pathname === menuItem.pathname)
                                        ? 'menu-link'
                                        : 'menu-link menu-link-active'
                                }`}
                            >
                                {menuIcon(pathname === menuItem.pathname, menuItem.icon)}
                                <span>{menuItem.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
