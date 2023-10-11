'use client';
import { Fragment, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/stores/user-store';
import useGeneralStore from '@/stores/general-store';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const route = useRouter();
  const user = useUserStore((state) => state);
  const setLoginIsOpen = useGeneralStore((state) => state.setLoginIsOpen);
  useEffect(() => {
    if (!user.id) {
      route.push('/');
      setLoginIsOpen(true);
    }
  }, [user, route, setLoginIsOpen]);

  return user ? <Fragment>{children}</Fragment> : null;
};

export default ProtectedRoute;
