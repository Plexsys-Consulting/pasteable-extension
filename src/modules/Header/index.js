import Name from './Name';
import OptionIcons from './OptionIcons'
import ToggleSide from './ToggleSide';

const Header = () => (
    <div className=''>
        <ToggleSide />
        <Name />
        <OptionIcons />
    </div>
);

export default Header;