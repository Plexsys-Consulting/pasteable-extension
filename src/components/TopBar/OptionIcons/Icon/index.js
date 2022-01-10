export default ({ icon, text = "interact" }) => (
    <div className='icon group'>
        {icon}
        <span className="icon-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)