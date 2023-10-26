interface MenuItem {
    key: string;
    label: string;
    pathname: string;
    icon?: string;
    children?: MenuItem[];
}

export const menus: MenuItem[] = [
    {
        key: '1',
        label: 'For You',
        pathname: '/',
        icon: 'HomeIcon',
    },
    {
        key: '2',
        label: 'Following',
        pathname: '/following',
        icon: 'GroupUserIcon',
    },
    {
        key: '3',
        label: 'Explore',
        pathname: '/explore',
        icon: 'CompassIcon',
    },
    {
        key: '4',
        label: 'Live',
        pathname: '/live',
        icon: 'CameraIcon',
    },
];
