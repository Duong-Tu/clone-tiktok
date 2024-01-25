'use client';
import { ReactNode, useEffect, useState } from 'react';
import { useAuth } from '@/hooks/auth.hook';
import Header from './header';
import Sidebar from './sidebar';
import Auth from './auth';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/root-reducers';
import { ToastContainer, toast } from 'react-toastify';
import { setIsLoading, setIsLoginOpen } from '@/redux/slicers/general.slice';

const MainLayout = ({ children }: { children: ReactNode }) => {
    const message = useSelector((state: RootState) => state.general.message);
    const { isLogged } = useAuth();
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            toast(message.text, { type: message.type });
        }
    }, [message]);

    useEffect(() => {
        if (isLogged) {
            setVisible(false);
        } else {
            dispatch(setIsLoginOpen(true));
            setVisible(true);
        }
        dispatch(setIsLoading(false));
    }, [dispatch, setVisible, isLogged]);

    return (
        <div className="mainLayout">
            <ToastContainer />
            {!isLogged && <Auth visible={visible} setVisible={setVisible} />}

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
