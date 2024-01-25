'use client';
import React, { Fragment, useState } from 'react';
import { RootState } from '@/redux/root-reducers';
import Register from './register';
import Login from './login';
import { useSelector } from 'react-redux';
import { Spinner } from './spinner';
import Modal from './modal';

type AuthProps = {
    visible: boolean;
    setVisible: (value: boolean) => void;
};
const Auth = ({ visible, setVisible }: AuthProps) => {
    const { isLoginOpen, isLoading } = useSelector((state: RootState) => state.general);
    const [title, setTitle] = useState<string>('');

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
