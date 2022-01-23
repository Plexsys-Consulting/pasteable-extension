import { FaPlus, FaLevelUpAlt, FaLevelDownAlt, FaEdit } from 'react-icons/fa';
import Icon from './Icon';
import { useViewContext } from 'modules/common/contexts/ViewContext';

const iconList = [
    {
        linkedView: "create",
        iconComponent: <FaPlus />,
        text: "create copy/paste map"
    },
    {
        linkedView: "run-copy",
        iconComponent: <FaLevelUpAlt />,
        text: "run copy"
    },
    {
        linkedView: "run-paste",
        iconComponent: <FaLevelDownAlt />,
        text: "run paste"
    }, {
        linkedView: "edit",
        iconComponent: <FaEdit />,
        text: "edit copy/paste maps"
    },
]

const OptionIcons = () => {
    const [showView, setShowView] = useViewContext();
    return (
        <div className='flex flex-row justify-left'>
            {iconList.map(({ linkedView, iconComponent, text }) => <Icon
                key={linkedView}
                onClick={() => setShowView(linkedView)}
                className={showView === linkedView ? "bg-emerald-200 text-emerald-900 rounded-b-lg" : ""}
                icon={iconComponent}
                text={text}
            />)}
        </div>
    )
};

export default OptionIcons;