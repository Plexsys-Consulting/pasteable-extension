import { useContext } from 'react';
import { FaPlus, FaLevelUpAlt, FaLevelDownAlt, FaEdit } from 'react-icons/fa';
import Icon from './Icon';
import { engageElementSelection } from '../../../functions';
import { Context } from '../../../contexts';

export default _=> {
    const [ showView, setShowView ] = useContext(Context);
    const selectEls = async e => {
        try {
            setShowView('create');
            const selected = await engageElementSelection();
            console.dir(selected)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='flex flex-row justify-left'>
            <Icon onClick={selectEls} className={showView === "create" ? "bg-emerald-200 text-emerald-900 rounded-b-lg" : ''} icon={<FaPlus />} text="create copy/paste map" />
            <Icon onClick={() => setShowView('run-copy')} className={showView === "run-copy" ? "bg-emerald-200 text-emerald-900 rounded-b-lg" : ''} icon={<FaLevelUpAlt />} text="run copy" />
            <Icon onClick={() => setShowView('run-paste')} className={showView === "run-paste" ? "bg-emerald-200 text-emerald-900 rounded-b-lg" : ''} icon={<FaLevelDownAlt />} text="run paste" />
            <Icon onClick={() => setShowView('edit')} className={showView === "edit" ? "bg-emerald-200 text-emerald-900 rounded-b-lg" : ''} icon={<FaEdit />} text="edit copy/paste maps" />
        </div>
    )
}