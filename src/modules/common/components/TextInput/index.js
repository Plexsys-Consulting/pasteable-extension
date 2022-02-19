const TextInput = ({value, onChange}) => (
    <input 
        type="text"
        className={`
            appearance-none border-2 rounded w-full p-1 my-1 leading-tight
            bg-emerald-100 text-emerald-900 border-emerald-200
            focus:outline-none focus:bg-white focus:border-emerald-500
        `}
        value={value}
        onChange={onChange}
    />
)

export default TextInput;