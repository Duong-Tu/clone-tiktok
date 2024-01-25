'use client';
import { FormEvent, Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoginOpen, setMessage } from '@/redux/slicers/general.slice';
import { setUser } from '@/redux/slicers/user.slice ';
import { useRegisterUser } from '@/hooks/user.hook';
import { useGraphQLErrorHandler } from '@/hooks/validate.hook';
import Input from './input';
import Button from './button';
import { Spinner } from './spinner';

type RegisterProps = {
    setVisible: (value: boolean) => void;
};
const Register = ({ setVisible }: RegisterProps) => {
    const dispatch = useDispatch();
    const { registerUser, data, loading, error } = useRegisterUser();
    const { errors, handleGraphQLError, clearErrors } = useGraphQLErrorHandler();
    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        fullName: '',
        confirmPassword: '',
    });
    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        clearErrors();
        e.preventDefault();
        await registerUser(registerData);
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
            dispatch(setMessage({ type: 'success', text: 'Registration successful' }));
        }
    }, [data, setVisible, dispatch]);
    return (
        <Fragment>
            {loading && <Spinner className="loading" />}
            <form className="register-form" onSubmit={handleRegister}>
                <Input
                    className="register-form-text"
                    placeholder="Fullname"
                    error={errors['fullname']}
                    onChange={(value) => setRegisterData({ ...registerData, fullName: value })}
                />
                <Input
                    type="email"
                    className="register-form-text"
                    placeholder="email"
                    error={errors['email']}
                    onChange={(value) => setRegisterData({ ...registerData, email: value })}
                />
                <Input
                    type="password"
                    className="register-form-text"
                    placeholder="password"
                    error={errors['password']}
                    onChange={(value) => setRegisterData({ ...registerData, password: value })}
                />
                <Input
                    type="password"
                    className="register-form-text"
                    placeholder="confirm password"
                    error={errors['confirmPassword']}
                    onChange={(value) =>
                        setRegisterData({ ...registerData, confirmPassword: value })
                    }
                />
                <Button
                    htmlType="submit"
                    type="primary"
                    size="middle"
                    className="register-submitBtn"
                >
                    <span>Sign up</span>
                </Button>
            </form>
            <div className="register-footer">
                Already have an account?
                <Button
                    onClick={() => {
                        dispatch(setIsLoginOpen(true));
                    }}
                    className="register-loginBtnSwitch"
                >
                    Sign in
                </Button>
            </div>
        </Fragment>
    );
};

export default Register;
