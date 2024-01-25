import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGraphQLErrorHandler } from '@/hooks/validate.hook';
import { useLoginUser } from '@/hooks/user.hook';
import Input from '../input';
import Button from '../button';
import { Spinner } from '../spinner';
import { setIsLoginOpen, setMessage } from '@/redux/slicers/general.slice';
import { setUser } from '@/redux/slicers/user.slice ';

type FormLoginProps = {
    setVisible: (value: boolean) => void;
};
const FormLogin = ({ setVisible }: FormLoginProps) => {
    const dispatch = useDispatch();
    const { loginUser, data, loading, error } = useLoginUser();
    const { errors, handleGraphQLError, clearErrors } = useGraphQLErrorHandler();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        console.log('hello');
        e.preventDefault();
        clearErrors();
        await loginUser(loginData);
    };

    useEffect(() => {
        if (error) {
            dispatch(setMessage({ type: 'error', text: error.message }));
            handleGraphQLError(error);
        }
    }, [error, dispatch, handleGraphQLError]);

    useEffect(() => {
        if (data) {
            dispatch(setUser(data));
            dispatch(setIsLoginOpen(false));
            setVisible(false);
            dispatch(setMessage({ type: 'success', text: 'Login successful' }));
        }
    }, [data, setVisible, dispatch]);

    return (
        <div className="loginForm">
            {loading && <Spinner className="loading" />}
            <form className="loginForm-form" onSubmit={handleLogin}>
                <Input
                    type="email"
                    className="loginForm-textField"
                    placeholder="email"
                    error={errors['email']}
                    onChange={(value) => setLoginData({ ...loginData, email: value })}
                />
                <Input
                    type="password"
                    className="loginForm-textField"
                    placeholder="password"
                    error={errors['password']}
                    onChange={(value) => setLoginData({ ...loginData, password: value })}
                />

                <Button
                    htmlType="submit"
                    size="middle"
                    type="primary"
                    className="loginForm-submitBtn"
                >
                    <span>Sign in</span>
                </Button>
            </form>
        </div>
    );
};

export default FormLogin;
