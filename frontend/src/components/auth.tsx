'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { RootState } from '@/redux/root-reducers';
import Register from './register';
import Login from './login';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, setIsLoginOpen } from '@/redux/slicers/general.slice';
import { Spinner } from './spinner';
import Modal from './modal';
import { useAuth } from '@/hooks/auth.hook';

type AuthProps = {
    visible: boolean;
    setVisible: (value: boolean) => void;
};
const Auth = ({ visible, setVisible }: AuthProps) => {
    const { isLoginOpen, isLoading } = useSelector((state: RootState) => state.general);
    const { id: userId } = useSelector((state: RootState) => state.user);
    const { isLogged } = useAuth();
    const [title, setTitle] = useState<string>('');
    const dispatch = useDispatch();

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (isLogged) {
            setVisible(false);
        } else {
            dispatch(setIsLoginOpen(true));
            setVisible(true);
        }
        dispatch(setIsLoading(false));
    }, [dispatch, setVisible, userId, isLogged]);

    return isLoading ? (
        <Spinner className="loading" />
    ) : visible ? (
        <div className="overlay">
            <div className="authLayout">
                <div className="authLayout-container">
                    <Modal visible={visible} title={title} onClose={handleClose}>
                        {isLoginOpen ? (
                            <Login setTitle={setTitle} setVisible={setVisible} />
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
