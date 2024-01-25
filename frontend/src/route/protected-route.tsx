'use client';
import { Fragment, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const route = useRouter();

    useEffect(() => {
        if (true) {
            route.push('/');
        }
    }, [route]);

    return <Fragment>{children}</Fragment>;
};

export default ProtectedRoute;
