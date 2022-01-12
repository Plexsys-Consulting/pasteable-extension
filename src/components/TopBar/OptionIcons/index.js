import { FaPlus, FaLevelUpAlt, FaLevelDownAlt, FaEdit } from 'react-icons/fa';
import Icon from './Icon';
import { engageElementSelection } from '../../../functions';

export default () => {
const selectEm = async e => {
    e.preventDefault();
    e.stopPropagation()
    try {
        const selected = await engageElementSelection();
        console.dir(selected)
    } catch (error) {
        console.error(error);
    }
}
return (
    <div className='flex flex-row justify-left'>
        <Icon onClick={selectEm} icon={<FaPlus />} text="create copy/paste map" />
        <Icon icon={<FaLevelUpAlt />} text="run copy" />
        <Icon icon={<FaLevelDownAlt />} text="run paste" />
        <Icon icon={<FaEdit />} text="edit copy/paste maps" />
    </div>
)}