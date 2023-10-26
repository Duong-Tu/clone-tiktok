import Button from './button';
import { Logo } from '@/icons/logo';
import { DesktopIcon } from '@/icons/desktop-icon';
import { MessageIcon } from '@/icons/messages-icon';
import { InboxIcon } from '@/icons/inbox-icon';
import { PlusIcon } from '@/icons/plus-icon';
import Search from './search';
import avtImg from '@/assets/images/avt.jpeg';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-left">
                <Logo width="118" height="42" />
            </div>
            <div className="header-center">
                <Search className="header-search" />
            </div>
            <div className="header-right">
                <Button className="header-btnUpload" url="/upload">
                    <PlusIcon width="20" height="20" /> <span>upload</span>
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
                <Button className="header-avt" shape="round">
                    <img src={`${avtImg.src}`} alt="" />
                </Button>
            </div>
        </header>
    );
};

export default Header;
