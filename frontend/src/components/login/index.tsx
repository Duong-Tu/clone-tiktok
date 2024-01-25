'use client';
import React, { Fragment, ReactElement, ReactNode, useEffect, useState } from 'react';
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
    content?: ReactElement;
    children?: { title: string; content: React.ReactNode };
    handleClick?: () => void;
};

type LoginProps = {
    setTitle: (value: string) => void;
    setVisible: (value: boolean) => void;
};

const Login = ({ setTitle, setVisible }: LoginProps) => {
    const loginList: LoginItem[] = [
        {
            icon: <FacebookIcon width="18" height="18" />,
            title: 'Use phone / email / username',
            children: { title: 'Login', content: <FormLogin setVisible={setVisible} /> },
        },
        {
            icon: <QRCodeIcon width="18" height="18" />,
            title: 'Use QR code',
        },
        {
            icon: <UserIcon width="18" height="18" />,
            title: 'Continue with Facebook',
        },
        {
            icon: <GoogleIcon width="18" height="18" />,
            title: 'Continue with Google',
        },
        {
            icon: <TwitterIcon width="18" height="18" />,
            title: 'Continue with Twitter',
        },
        {
            icon: <LineIcon width="18" height="18" />,
            title: 'Continue with LINE',
        },
        {
            icon: <KakaoTalkIcon width="18" height="18" />,
            title: 'Continue with KakaoTalk',
        },
        {
            icon: <AppleIcon width="18" height="18" />,
            title: 'Continue with Apple',
        },
    ];

    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState<LoginItem | null>(null);
    const handleSelectLoginItem = (item: LoginItem) => {
        if (item.children) {
            setSelectedItem(item);
        } else {
            alert('Please select login by email');
        }
    };

    const handleBackButtonClick = () => {
        setSelectedItem(null);
    };

    useEffect(() => {
        if (selectedItem?.children) {
            setTitle(selectedItem.children.title);
        } else {
            setTitle('Log in to TikTok');
        }
    }, [setTitle, selectedItem]);

    return (
        <div className="login">
            {selectedItem ? (
                <div className="login-content">
                    <Button className="login-backBtn" onClick={handleBackButtonClick}>
                        <span>
                            <ArrowRightIcon width="24" height="24" />
                        </span>
                    </Button>
                    {selectedItem?.children?.content}
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
        {icon}
        <h4 className="item-title">{title}</h4>
    </Button>
);
