export default ({ 
    icon, 
    text = "interact", 
    onClick = () => console.log("didn't set the onClick function... oops") }) => (
    <div className='icon group' onClick={onClick}>
        {icon}
        <span className="icon-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)