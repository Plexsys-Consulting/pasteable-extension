import { FaPlus, FaLevelUpAlt, FaLevelDownAlt, FaEdit } from 'react-icons/fa';
import Icon from './Icon';

export default () => (
    <div className='flex flex-row justify-left'>
        <Icon icon={<FaPlus />} text="create copy/paste map" />
        <Icon icon={<FaLevelUpAlt />} text="run copy" />
        <Icon icon={<FaLevelDownAlt />} text="run paste" />
        <Icon icon={<FaEdit />} text="edit copy/paste maps" />
    </div>
)