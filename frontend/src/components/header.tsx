import { Logo } from '@/icons/logo';
import { SearchIcon } from '@/icons/search-icon';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Logo width="118" height="42" />
      </div>
      <div className="header-center">
        <input type="text" placeholder="Search" className="search-bar" />
        <button>
          <SearchIcon width="24" height="24" />
        </button>
      </div>
      <div className="header-right">
       
      </div>
    </header>
  );
};

export default Header;
