const Select = ({ options, value, onChange, className = [] }) => {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`
                    w-full p-2 rounded-md shadow-sm 
                    bg-emerald-600 text-white
                    active:outline-none focus:outline-none cursor-pointer
                    ${[...className]}
                `}
        >
            {options.map(({value, text})=> <option key={value} value={value}>{text}</option>)}
        </select>
    )
}

export default Select;