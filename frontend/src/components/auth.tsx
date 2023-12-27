'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { RootState } from '@/redux/root-reducers';
import Register from './register';
import Login from './login';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginOpen } from '@/redux/slicers/general.slice';

const Auth = () => {
    const { isLoginOpen, isRegisterOpen } = useSelector((state: RootState) => state.general);
    const [visible, setVisible] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const isLogged = !!localStorage.getItem('user');
        if (!isLogged) {
            dispatch(setIsLoginOpen(true));
        }
    }, [dispatch]);

    useEffect(() => {
        setVisible(isLoginOpen || isRegisterOpen);
    }, [isLoginOpen, isRegisterOpen]);

    return visible ? (
        <div className="overlay">
            <div className="authLayout">
                <div className="authLayout-container">
                    {isLoginOpen && <Login setVisible={setVisible} />}
                    {isRegisterOpen && <Register setVisible={setVisible} />}
                </div>
            </div>
        </div>
    ) : (
        <Fragment />
    );
};

export default Auth;
