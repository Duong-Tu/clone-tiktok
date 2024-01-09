'use client';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePage } from '@/hooks/page.hook';
import Button from './button';
import Search from './search';
import { Logo } from '@/icons/logo';
import { DesktopIcon } from '@/icons/desktop-icon';
import { MessageIcon } from '@/icons/messages-icon';
import { InboxIcon } from '@/icons/inbox-icon';
import { PlusIcon } from '@/icons/plus-icon';
import avtImg from '@/assets/images/avt.jpeg';
import { useDispatch } from 'react-redux';
import { setIsLoginOpen } from '@/redux/slicers/general.slice';
import { EllipsisVerticalIcon } from '@/icons/ellipsis-vertical-icon';
import { useAuth } from '@/hooks/auth.hook';

type HeaderProps = {
    setVisible: (value: boolean) => void;
};
const Header = ({ setVisible }: HeaderProps) => {
    const { isUploadPage } = usePage();
    const { isLogged } = useAuth();
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="header-left">
                <Link href="/" className="header-logo">
                    <Logo width="118" height="42" />
                </Link>
                {isUploadPage && (
                    <Fragment>
                        <div className="header-creatorCenter">
                            <Button className="header-creatorCenterBtn">Creator Center</Button>
                        </div>
                        <Button className="header-creatorCenterBtn">Beta</Button>
                    </Fragment>
                )}
            </div>
            {!isUploadPage && (
                <div className="header-center">
                    <Search className="header-search" />
                </div>
            )}

            <div className="header-right">
                {!isUploadPage && (
                    <Fragment>
                        <Button className="header-btnUpload" url="/upload">
                            <PlusIcon width="20" height="20" /> <span>Upload</span>
                        </Button>

                        {isLogged ? (
                            <Fragment>
                                <Button className="header-btnIconOnly">
                                    <MessageIcon width="26" height="26" />
                                </Button>
                                <Button className="header-btnIconOnly">
                                    <InboxIcon width="32" height="32" />
                                </Button>
                            </Fragment>
                        ) : (
                            <Button
                                onClick={() => {
                                    dispatch(setIsLoginOpen(true));
                                    setVisible(true);
                                }}
                                type="primary"
                                className="header-btnLogin"
                            >
                                <span>Log in</span>
                            </Button>
                        )}
                    </Fragment>
                )}
                <Button className="header-btnIconOnly">
                    <DesktopIcon width="1em" height="1em" fontSize="26" />
                </Button>
                <Button className="header-btnIconOnly">
                    <EllipsisVerticalIcon width="1em" height="1em" fontSize="26" />
                </Button>
                {isLogged && (
                    <Button className="header-avt" shape="round">
                        <Image width={32} height={32} src={`${avtImg.src}`} alt="avatar" />
                    </Button>
                )}
            </div>
        </header>
    );
};

export default Header;
