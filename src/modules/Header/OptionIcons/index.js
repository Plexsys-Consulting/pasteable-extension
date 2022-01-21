import { FaPlus, FaLevelUpAlt, FaLevelDownAlt, FaEdit } from 'react-icons/fa';
import Icon from './Icon';
import { engageElementSelection } from 'modules/common/functions';
import { useViewContext } from 'modules/common/contexts/ViewContext';

const selectEls = async () => {
    try {
        const selected = await engageElementSelection();
        console.dir(selected)
    } catch (error) {
        console.error(error);
    }
}

const iconList = [
    {
        onClick: setShowView => { setShowView("create"); selectEls() },
        activeView: "create",
        iconComponent: <FaPlus />,
        text: "create copy/paste map"
    },
    {
        onClick: setShowView => setShowView("run-copy"),
        activeView: "run-copy",
        iconComponent: <FaLevelUpAlt />,
        text: "run copy"
    },
    {
        onClick: setShowView => setShowView("run-paste"),
        activeView: "run-paste",
        iconComponent: <FaLevelDownAlt />,
        text: "run paste"
    }, {
        onClick: setShowView => setShowView("edit"),
        activeView: "edit",
        iconComponent: <FaEdit />,
        text: "edit copy/paste maps"
    },
]

const OptionIcons = () => {
    const [showView, setShowView] = useViewContext();
    return (
        <div className='flex flex-row justify-left'>
            {iconList.map(({ onClick, activeView, iconComponent, text }) => <Icon
                onClick={() => onClick(setShowView)}
                className={showView === activeView ? "bg-emerald-200 text-emerald-900 rounded-b-lg" : ""}
                icon={iconComponent}
                text={text}
            />)}
        </div>
    )
};

export default OptionIcons;