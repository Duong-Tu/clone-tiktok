'use client';
import { FormEvent, Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoginOpen, setIsRegisterOpen } from '@/redux/slicers/general.slice';
import { REGISTER_USER } from '../graphql/mutations/register';
import { useMutation } from '@apollo/client';
import { setUser } from '@/redux/slicers/user.slice ';
import Modal from './modal';
import Input from './input';
import Button from './button';
import { Spinner } from './spinner';

type RegisterProps = {
    setVisible: (value: boolean) => void;
};
const Register = ({ setVisible }: RegisterProps) => {
    const dispatch = useDispatch();
    const [registerUser, { loading }] = useMutation(REGISTER_USER);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        fullName: '',
        confirmPassword: '',
    });
    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setErrors({});
            const { data: dataUser } = await registerUser({
                variables: {
                    email: registerData.email,
                    password: registerData.password,
                    fullname: registerData.fullName,
                    confirmPassword: registerData.confirmPassword,
                },
            });
            if (dataUser) {
                dispatch(setUser(dataUser.register.user));
                setVisible(false);
            }
        } catch (error: any) {
            const allErrors: Record<string, string> = {};
            if (error.graphQLErrors && error.graphQLErrors.length > 0) {
                error.graphQLErrors.forEach((graphQLError: any) => {
                    const extensions = graphQLError.extensions;
                    if (extensions?.code) {
                        allErrors['code'] = extensions.code || graphQLError.message;
                    }
                    if (extensions?.fullname) {
                        allErrors['fullname'] = extensions.fullname;
                    }
                    if (extensions?.email) {
                        allErrors['email'] = extensions.email;
                    }
                    if (extensions?.password) {
                        allErrors['password'] = extensions.password;
                    }
                    if (extensions?.confirmPassword) {
                        allErrors['confirmPassword'] = extensions.confirmPassword;
                    }
                });
            }

            setErrors((prevErrors) => ({
                ...prevErrors,
                ...allErrors,
            }));
        }
    };

    const handleClose = () => {
        setVisible(false);
    };
    return (
        <Fragment>
            {loading && <Spinner className="loading" />}
            <Modal visible={true} title="Sign up for TikTok" onClose={handleClose}>
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
                    <Button htmlType="submit" size="middle" className="register-submitBtn">
                        Sign up
                    </Button>
                </form>
                <div className="register-footer">
                    Already have an account?
                    <Button
                        onClick={() => {
                            dispatch(setIsLoginOpen(true));
                            dispatch(setIsRegisterOpen(false));
                        }}
                        className="register-loginBtnSwitch"
                    >
                        Sign in
                    </Button>
                </div>
            </Modal>
        </Fragment>
    );
};

export default Register;
