const Icon = ({ 
    icon, 
    text = "interact",
    className = '', 
    onClick = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log("didn't set the onClick function... oops");
    }
}) => (
    <div className={`icon group ${className}`} onClick={onClick}>
        {icon}
        <span className="icon-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default Icon;