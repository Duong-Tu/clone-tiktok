import { ReactNode } from 'react';
import Header from './header';
import Sidebar from './sidebar';

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="mainLayout">
            <div className="mainLayout-header">
                <Header />
            </div>
            <div className="mainLayout-content">
                <div className="mainLayout-sidebar">
                    <Sidebar />
                </div>
                <div className="mainLayout-posts">{children}</div>
            </div>
        </div>
    );
};

export default MainLayout;
