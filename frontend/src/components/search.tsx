import { SearchIcon } from '@/icons/search-icon';
import Button from './button';
import Input from './input';

interface SearchProps {
    className?: string;
}
const Search = ({ className }: SearchProps) => {
    const searchClasses = ['search'];
    if (className) {
        searchClasses.push(className);
    }
    return (
        <div className={searchClasses.join(' ')}>
            <Input type="text" placeholder="Search" className="search-text" />
            <span className="search-spliter"></span>
            <Button className="search-btn">
                <SearchIcon width="24" height="24" />
            </Button>
        </div>
    );
};

export default Search;
