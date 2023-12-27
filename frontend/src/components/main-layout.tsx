'use client';
import { ReactNode, useEffect } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Auth from './auth';

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="mainLayout">
            <Auth />
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
