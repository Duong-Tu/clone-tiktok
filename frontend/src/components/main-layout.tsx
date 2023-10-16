import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mainLayout">
      <div className="mainLayout-header">
        <Header />
      </div>
      <div className="mainLayout-content">{children}</div>
      <div className="mainLayout-footer">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
