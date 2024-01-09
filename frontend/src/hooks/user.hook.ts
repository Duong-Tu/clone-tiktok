import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../graphql/mutations/register';

export const useRegisterUser = () => {
    const [registerUserMutation, { data, loading, error }] = useMutation(REGISTER_USER);

    const registerUser = async (registerData: any) => {
        try {
            await registerUserMutation({
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
