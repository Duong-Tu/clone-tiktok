'use client';
import React, { Fragment, ReactNode, useState } from 'react';
import Modal from './modal';
// icons
import { QRCodeIcon } from '@/icons/qrCode-icon';
import { UserIcon } from '@/icons/user-icon';
import { FacebookIcon } from '@/icons/facebook-icon';
import { GoogleIcon } from '@/icons/google-icon';
import { TwitterIcon } from '@/icons/twitter-icon';
import { LineIcon } from '@/icons/line-icon';
import { KakaoTalkIcon } from '@/icons/kakao-talk-icon';
import { AppleIcon } from '@/icons/apple-icon';
import AuthLayout from './auth-layout';
import Button from './button';

type LoginItem = {
    icon?: ReactNode;
    title: string;
};
const Login = () => {
    const loginList: LoginItem[] = [
        {
            icon: <QRCodeIcon width="20" height="20" />,
            title: 'Use QR code',
        },
        {
            icon: <UserIcon width="20" height="20" />,
            title: 'Use phone / email / username',
        },
        {
            icon: <FacebookIcon width="20" height="20" />,
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
    const handleClose = () => {};
    const [visible, setVisible] = useState(true);
    const LoginItem = ({ icon, title }: LoginItem) => (
        <div className="item">
            <span className="item-icon">{icon}</span>
            <h4 className="item-title">{title}</h4>
        </div>
    );

    return visible ? (
        <AuthLayout>
            <Modal
                visible={true}
                setVisible={setVisible}
                title="Log in to TikTok"
                onClose={handleClose}
            >
                <ul className="login-list scrollbar-custom">
                    {loginList.map((item, index) => (
                        <li className="login-item" key={index}>
                            <LoginItem icon={item.icon} title={item.title} />
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
                    <Button className="login-registerBtnSwitch">Sign up</Button>
                </div>
            </Modal>
        </AuthLayout>
    ) : (
        <Fragment />
    );
};

export default Login;
