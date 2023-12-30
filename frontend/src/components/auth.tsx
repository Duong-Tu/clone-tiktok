'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { RootState } from '@/redux/root-reducers';
import Register from './register';
import Login from './login';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, setIsLoginOpen } from '@/redux/slicers/general.slice';
import { Spinner } from './spinner';
import Modal from './modal';

const Auth = () => {
    const { isLoginOpen, isLoading } = useSelector((state: RootState) => state.general);
    const [visible, setVisible] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('Log in to TikTok');
    const dispatch = useDispatch();

    useEffect(() => {
        const isLogged = !!localStorage.getItem('user');
        if (!isLogged) {
            dispatch(setIsLoginOpen(true));
            setVisible(true);
        }
        dispatch(setIsLoading(false));
    }, [dispatch]);

    const handleClose = () => {
        setVisible(false);
    };

    return isLoading ? (
        <Spinner className="loading" />
    ) : visible ? (
        <div className="overlay">
            <div className="authLayout">
                <div className="authLayout-container">
                    <Modal visible={visible} title={title} onClose={handleClose}>
                        {isLoginOpen ? (
                            <Login setTitle={setTitle} />
                        ) : (
                            <Register setVisible={setVisible} />
                        )}
                    </Modal>
                </div>
            </div>
        </div>
    ) : (
        <Fragment />
    );
};

export default Auth;
