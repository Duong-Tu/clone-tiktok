'use client';
import { ReactNode, useEffect, useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Auth from './auth';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/root-reducers';
import { ToastContainer, toast } from 'react-toastify';

const MainLayout = ({ children }: { children: ReactNode }) => {
    const [visible, setVisible] = useState(false);
    const message = useSelector((state: RootState) => state.general.message);
    useEffect(() => {
        if (message) {
            toast(message.text, { type: message.type });
        }
    }, [message]);
    return (
        <div className="mainLayout">
            <ToastContainer />
            <Auth visible={visible} setVisible={setVisible} />
            <div className="mainLayout-header">
                <Header setVisible={setVisible} />
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
