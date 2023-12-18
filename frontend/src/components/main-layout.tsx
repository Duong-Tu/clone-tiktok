import { ReactNode } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Login from './login';
import Register from './register';

const MainLayout = ({ children }: { children: ReactNode }) => {
    const isLogin = false;
    return (
        <div className="mainLayout">
            {isLogin ? <Login /> : <Register />}
            <div className="mainLayout-header">
                <Header />
            </div>
            <div className="mainLayout-content">
                <div className="mainLayout-sidebar scrollbar-custom">
                    <Sidebar />
                </div>
                <div className="mainLayout-posts">{children}</div>
            </div>
        </div>
    );
};

export default MainLayout;
