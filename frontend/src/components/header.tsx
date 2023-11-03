'use client';
import Button from './button';
import { Logo } from '@/icons/logo';
import { DesktopIcon } from '@/icons/desktop-icon';
import { MessageIcon } from '@/icons/messages-icon';
import { InboxIcon } from '@/icons/inbox-icon';
import { PlusIcon } from '@/icons/plus-icon';
import Search from './search';
import avtImg from '@/assets/images/avt.jpeg';
import Link from 'next/link';
import { Fragment } from 'react';
import { usePage } from '@/hooks/page.hook';

const Header: React.FC = () => {
    const { isUploadPage } = usePage();
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
                        <Button className="header-btnIconOnly">
                            <DesktopIcon width="1em" height="1em" fontSize="26" />
                        </Button>
                        <Button className="header-btnIconOnly">
                            <MessageIcon width="26" height="26" />
                        </Button>
                        <Button className="header-btnIconOnly">
                            <InboxIcon width="32" height="32" />
                        </Button>
                    </Fragment>
                )}
                <Button className="header-avt" shape="round">
                    <img src={`${avtImg.src}`} alt="" />
                </Button>
            </div>
        </header>
    );
};

export default Header;
