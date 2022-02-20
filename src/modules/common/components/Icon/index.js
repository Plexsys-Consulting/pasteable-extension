import './index.css';

const Icon = ({ 
    icon, 
    tooltip = false,
    tooltipSide = 'right',
    className = '', 
    onClick = () => console.log("didn't set the onClick function... oops")
}) => (
    <div className={`icon-tooltip-container group ${className}`} onClick={onClick}>
        {
            tooltip? 
            <div className={`icon-tooltip group-hover:scale-100 ${tooltipSide}-[100%]`}>
                {tooltip}
            </div>
            :
            null
        }
        {icon}
    </div>
);

export default Icon;