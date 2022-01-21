import { useState } from 'react';

const CreateMap = () => {
    const [selected, setSelected] = useState("second");
    return (
        <div className="p-2">
            <select
                value={selected}
                onChange={e=> setSelected(e.target.value)}
                className={`
                    w-full p-2 rounded-md shadow-sm 
                    shadow-emerald-600 bg-emerald-200 text-emerald-800
                    active:outline-none focus:outline-none cursor-pointer
                `}
            >
                <option value="first">First copy</option>
                <option value="second">Second copy</option>
                <option value="third">Third copy</option>
            </select>
        </div>
    )
};

export default CreateMap;