import React, { FormEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '@/graphql/mutations/login';
import Input from '../input';
import Button from '../button';
import { setUser } from '@/redux/slicers/user.slice ';
import { useDispatch } from 'react-redux';

const FormLogin = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loginUser, { loading }] = useMutation(LOGIN_USER);
    const dispatch = useDispatch();

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setErrors({});
            const { data: dataUser } = await loginUser({
                variables: {
                    email: loginData.email,
                    password: loginData.password,
                },
            });

            if (dataUser.login.user) {
                dispatch(setUser(dataUser.login.user));
            }
        } catch (error) {}
    };
    return (
        <div className="loginForm">
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
