'use client';
import { Fragment, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/stores/user-store';
import useGeneralStore from '@/stores/general-store';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const route = useRouter();
    const user = useUserStore((state) => state);
    const setIsLoginOpen = useGeneralStore((state) => state.setIsLoginOpen);
    useEffect(() => {
        if (true) {
            route.push('/');
            setIsLoginOpen(true);
        }
    }, [user, route, setIsLoginOpen]);

    return user ? <Fragment>{children}</Fragment> : null;
};

export default ProtectedRoute;
