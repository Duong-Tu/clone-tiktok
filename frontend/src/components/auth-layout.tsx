import React, { ReactNode } from 'react';

type AuthLayoutProps = {
    children: ReactNode;
};
const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="overlay">
            <div className="authLayout">
                <div className="authLayout-container">{children}</div>
            </div>
        </div>
    );
};

export default AuthLayout;
