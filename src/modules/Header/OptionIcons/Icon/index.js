const Icon = ({ 
    icon, 
    text = "interact",
    className = '', 
    onClick = () => console.log("didn't set the onClick function... oops")
}) => (
    <div className={`header-icon group ${className}`} onClick={onClick}>
        {icon}
        <span className="header-icon-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default Icon;