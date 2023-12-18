'use client';
import React, { FormEvent, Fragment, useState } from 'react';
import { GraphQLErrorExtensions } from 'graphql';
import { REGISTER_USER } from '../graphql/mutations/register';
import { useMutation } from '@apollo/client';
import { useUserStore } from '@/stores/user-store';
import useGeneralStore from '@/stores/general-store';
import AuthLayout from './auth-layout';
import Modal from './modal';
import Input from './input';
import Button from './button';

const Register = () => {
    const [visible, setVisible] = useState(true);
    const [registerUser, { loading, error, data }] = useMutation(REGISTER_USER);
    const setUser = useUserStore((state) => state.setUser);
    const setIsLoginOpen = useGeneralStore((state) => state.setIsLoginOpen);
    const [errors, setErrors] = React.useState<GraphQLErrorExtensions>({});
    const [loginData, setLoginData] = React.useState({
        email: '',
        password: '',
        fullName: '',
        confirmPassword: '',
    });
    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setErrors({});
            await registerUser({
                variables: {
                    email: loginData.email,
                    password: loginData.password,
                    fullname: loginData.fullName,
                    confirmPassword: loginData.confirmPassword,
                },
            });
            console.log(error?.graphQLErrors[0].extensions);
            setUser(data.register.user);
            setIsLoginOpen(false);
        } catch (_) {
            if (error && error.graphQLErrors && error.graphQLErrors[0].extensions) {
                const validationErrors = error.graphQLErrors[0].extensions;
                setErrors(validationErrors);
            }
        }
    };
    console.log({ loginData });
    return visible ? (
        <AuthLayout>
            <Modal visible={visible} setVisible={setVisible} title="Sign up for TikTok">
                <form className="register-form" onSubmit={handleRegister}>
                    <Input
                        className="register-form-text"
                        placeholder="Fullname"
                        onChange={(value) => setLoginData({ ...loginData, fullName: value })}
                    />
                    <Input
                        type="email"
                        className="register-form-text"
                        placeholder="email"
                        onChange={(value) => setLoginData({ ...loginData, email: value })}
                    />
                    <Input
                        type="password"
                        className="register-form-text"
                        placeholder="password"
                        onChange={(value) => setLoginData({ ...loginData, password: value })}
                    />
                    <Input
                        type="password"
                        className="register-form-text"
                        placeholder="confirm password"
                        onChange={(value) => setLoginData({ ...loginData, confirmPassword: value })}
                    />
                    <Button htmlType="submit" size="middle" className="register-submitBtn">
                        Sign up
                    </Button>
                </form>
                <div className="register-footer">
                    Already have an account?
                    <Button htmlType="submit" className="register-loginBtnSwitch">
                        Sign in
                    </Button>
                </div>
            </Modal>
        </AuthLayout>
    ) : (
        <Fragment />
    );
};

export default Register;
