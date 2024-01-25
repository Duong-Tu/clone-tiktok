import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '@/graphql/mutations/register';
import { LOGIN_USER } from '@/graphql/mutations/login';

export const useRegisterUser = () => {
    const [registerMutation, { data, loading, error }] = useMutation(REGISTER_USER);

    const registerUser = async (registerData: any) => {
        try {
            await registerMutation({
                variables: {
                    email: registerData.email,
                    password: registerData.password,
                    fullname: registerData.fullName,
                    confirmPassword: registerData.confirmPassword,
                },
            });
        } catch (error) {
            console.error(error);
        }
    };

    return { registerUser, data: data?.register.user, loading, error };
};

export const useLoginUser = () => {
    const [loginMutation, { data, loading, error }] = useMutation(LOGIN_USER);

    const loginUser = async (loginData: any) => {
        try {
            await loginMutation({
                variables: {
                    email: loginData.email,
                    password: loginData.password,
                },
            });
        } catch (error) {
            console.error(error);
        }
    };

    return { loginUser, data: data?.login.user, loading, error };
};
