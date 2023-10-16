import ProtectedRoute from '@/route/protected-route';
import { ReactElement } from 'react';

const FeedLayout = ({ children }: { children: ReactElement }) => {
  return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default FeedLayout;
