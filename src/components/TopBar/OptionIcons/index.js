import { FaPlus, FaLevelUpAlt, FaLevelDownAlt, FaEdit } from 'react-icons/fa';
import Icon from './Icon';
import { engageElementSelection } from '../../../functions';
import { useViewContext } from '../../../contexts/ViewContext';

const selectEls = async () => {
    try {
        const selected = await engageElementSelection();
        console.dir(selected)
    } catch (error) {
        console.error(error);
    }
}

const OptionIcons = () => {
    const [ showView, setShowView ] = useViewContext();
    return (
        <div className='flex flex-row justify-left'>
            <Icon onClick={() => {setShowView('create'); selectEls()}} className={showView === "create" ? "bg-emerald-200 text-emerald-900 rounded-b-lg" : ''} icon={<FaPlus />} text="create copy/paste map" />
            <Icon onClick={() => setShowView('run-copy')} className={showView === "run-copy" ? "bg-emerald-200 text-emerald-900 rounded-b-lg" : ''} icon={<FaLevelUpAlt />} text="run copy" />
            <Icon onClick={() => setShowView('run-paste')} className={showView === "run-paste" ? "bg-emerald-200 text-emerald-900 rounded-b-lg" : ''} icon={<FaLevelDownAlt />} text="run paste" />
            <Icon onClick={() => setShowView('edit')} className={showView === "edit" ? "bg-emerald-200 text-emerald-900 rounded-b-lg" : ''} icon={<FaEdit />} text="edit copy/paste maps" />
        </div>
    )
};

export default OptionIcons;