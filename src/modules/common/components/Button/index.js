const Button = ({icon, text, onClick, className }) => (
    <button className={`primary-button ${className}`} onClick={onClick}>
        {icon}
        {text}
    </button>
)

export default Button;