import Header from './Header';
import OptionIcons from './OptionIcons';
import ToggleSide from './ToggleSide';

const TopBar = () => (
    <div className=''>
        <ToggleSide />
        <Header />
        <OptionIcons />
    </div>
);

export default TopBar;