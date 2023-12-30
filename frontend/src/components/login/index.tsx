'use client';
import React, { Fragment, ReactNode, useState } from 'react';
import Button from '../button';
import FormLogin from './form-login';

// icons
import { QRCodeIcon } from '@/icons/qrCode-icon';
import { UserIcon } from '@/icons/user-icon';
import { FacebookIcon } from '@/icons/facebook-icon';
import { GoogleIcon } from '@/icons/google-icon';
import { TwitterIcon } from '@/icons/twitter-icon';
import { LineIcon } from '@/icons/line-icon';
import { KakaoTalkIcon } from '@/icons/kakao-talk-icon';
import { AppleIcon } from '@/icons/apple-icon';
import { useDispatch } from 'react-redux';
import { setIsLoginOpen } from '@/redux/slicers/general.slice';
import { ArrowRightIcon } from '@/icons/arrow-right-icon';

type LoginItem = {
    icon?: ReactNode;
    title: string;
    children?: { title: string; content: React.ReactNode };
    handleClick?: () => void;
};

type LoginProps = {
    setTitle: (value: string) => void;
};

const loginList: LoginItem[] = [
    {
        icon: <QRCodeIcon width="20" height="20" />,
        title: 'Use QR code',
    },
    {
        icon: <FacebookIcon width="20" height="20" />,
        title: 'Use phone / email / username',
        children: { title: 'Login', content: <FormLogin /> },
    },
    {
        icon: <UserIcon width="20" height="20" />,
        title: 'Continue with Facebook',
    },
    {
        icon: <GoogleIcon width="20" height="20" />,
        title: 'Continue with Google',
    },
    {
        icon: <TwitterIcon width="20" height="20" />,
        title: 'Continue with Twitter',
    },
    {
        icon: <LineIcon width="20" height="20" />,
        title: 'Continue with LINE',
    },
    {
        icon: <KakaoTalkIcon width="20" height="20" />,
        title: 'Continue with KakaoTalk',
    },
    {
        icon: <AppleIcon width="20" height="20" />,
        title: 'Continue with Apple',
    },
];

const Login = ({ setTitle }: LoginProps) => {
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState<LoginItem | null>(null);
    const handleSelectLoginItem = (item: LoginItem) => {
        setSelectedItem(item);
        setTitle(item.children?.title || item.title);
    };

    const handleBackButtonClick = () => {
        setSelectedItem(null);
        setTitle('Log in to TikTok');
    };
    return (
        <div className="login">
            {selectedItem ? (
                <div className="login-content">
                    <Button className="login-backBtn" onClick={handleBackButtonClick}>
                        <ArrowRightIcon width="24" height="24" />
                    </Button>
                    {selectedItem?.children?.content || <h3>Please select login by email</h3>}
                </div>
            ) : (
                <Fragment>
                    <ul className="login-list scrollbar-custom">
                        {loginList.map((item, index) => (
                            <li className="login-item" key={index}>
                                <LoginItem
                                    icon={item.icon}
                                    title={item.title}
                                    handleClick={() => handleSelectLoginItem(item)}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className="login-policyConfirmTips">
                        <span>
                            By continuing, you agree to TikTok&lsquo;s
                            <strong>Terms of Service </strong>
                            and confirm that you have read TikTok&lsquo;s&lsquo;
                            <strong>Privacy Policy</strong>
                        </span>
                    </div>
                    <div className="login-footer">
                        Don&lsquo;t have an account?
                        <Button
                            className="login-registerBtnSwitch"
                            onClick={() => {
                                dispatch(setIsLoginOpen(false));
                                setTitle('Sign up for TikTok');
                            }}
                        >
                            Sign up
                        </Button>
                    </div>
                </Fragment>
            )}
        </div>
    );
};

export default Login;

const LoginItem = ({ icon, title, handleClick }: LoginItem) => (
    <Button className="item" onClick={handleClick}>
        <span className="item-icon">{icon}</span>
        <h4 className="item-title">{title}</h4>
    </Button>
);
