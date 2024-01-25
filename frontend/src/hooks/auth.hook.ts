import { RootState } from '@/redux/root-reducers';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useAuth = () => {
    const { id: userId } = useSelector((state: RootState) => state.user);
    const [isLogged, setIsLogged] = useState<boolean>(false);

    useEffect(() => {
        const access_token = localStorage.getItem('access_token');
        setIsLogged(!!userId || !!access_token);
    }, [userId]);

    return { isLogged };
};
