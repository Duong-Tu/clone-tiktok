import { useEffect, useState } from 'react';
export const useAuth = () => {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    useEffect(() => {
        const access_token = localStorage.getItem('accessToken');
        setIsLogged(!!access_token);
    }, [setIsLogged]);

    return { isLogged };
};
