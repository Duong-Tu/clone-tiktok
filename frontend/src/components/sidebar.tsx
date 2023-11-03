'use client';
import React, { Fragment } from 'react';
import Navbar from './navbar';
import Link from 'next/link';
import avatar from '@/assets/images/avt.jpeg';
import Button from './button';
import { usePage } from '@/hooks/page.hook';

interface AccountItemProps {
    fullname: string;
    username: string;
    avatar: string;
}

const Sidebar = () => {
    const { isUploadPage } = usePage();
    const accounts: User[] = [
        {
            username: 'khanhanbolero2006',
            fullname: 'Khánh An Bolero',
            avatarUrl: avatar.src,
        },
        {
            username: 'khanhanbolero2006',
            fullname: 'Khánh An Bolero',
            avatarUrl: avatar.src,
        },
        {
            username: 'khanhanbolero2006',
            fullname: 'Khánh An Bolero',
            avatarUrl: avatar.src,
        },
        {
            username: 'khanhanbolero2006',
            fullname: 'Khánh An Bolero',
            avatarUrl: avatar.src,
        },
        {
            username: 'khanhanbolero2006',
            fullname: 'Khánh An Bolero',
            avatarUrl: avatar.src,
        },
        {
            username: 'khanhanbolero2006',
            fullname: 'Khánh An Bolero',
            avatarUrl: avatar.src,
        },
        {
            username: 'khanhanbolero2006',
            fullname: 'Khánh An Bolero',
            avatarUrl: avatar.src,
        },
        {
            username: 'khanhanbolero2006',
            fullname: 'Khánh An Bolero',
            avatarUrl: avatar.src,
        },
        {
            username: 'khanhanbolero2006',
            fullname: 'Khánh An Bolero',
            avatarUrl: avatar.src,
        },
        {
            username: 'khanhanbolero2006',
            fullname: 'Khánh An Bolero',
            avatarUrl: avatar.src,
        },
        {
            username: 'khanhanbolero2006',
            fullname: 'Khánh An Bolero',
            avatarUrl: avatar.src,
        },
        {
            username: 'khanhanbolero2006',
            fullname: 'Khánh An Bolero',
            avatarUrl: avatar.src,
        },
        {
            username: 'khanhanbolero2006',
            fullname: 'Khánh An Bolero',
            avatarUrl: avatar.src,
        },
    ];
    const AccountItem = ({ fullname, username, avatar }: AccountItemProps) => (
        <Link href={`/@/${username}`} className="sidebar-accountLink">
            <div className="sidebar-avatarUser">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="sidebar-infoAccountContainer">
                <h1 className="sidebar-titleUser">{username}</h1>
                <p className={'sidebar-fullnameUser'}>{fullname}</p>
            </div>
        </Link>
    );
    return (
        <div className="sidebar">
            {!isUploadPage ? (
                <Fragment>
                    <div className="sidebar-navbar">
                        <Navbar />
                    </div>
                    <div className="sidebar-accounts">
                        <h3 className="sidebar-titleAccounts">Following accounts</h3>
                        <ul className="sidebar-accountList">
                            {accounts.map((account, idx) => (
                                <li key={idx} className="sidebar-accountItem">
                                    <AccountItem
                                        username={account.username}
                                        fullname={account.fullname}
                                        avatar={account.avatarUrl}
                                    />
                                </li>
                            ))}
                        </ul>
                        <Button className="sidebar-seeMoreBtn">see more</Button>
                    </div>
                </Fragment>
            ) : (
                <Fragment></Fragment>
            )}
        </div>
    );
};

export default Sidebar;