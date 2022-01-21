import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

const ToggleSide = () => {
    const [side, setSide] = useState('right');
    return (
        <div className='absolute top-3 right-3 text-emerald-200 cursor-pointer' >
            <FaExchangeAlt onClick={e=> {
                if (side === 'left') {
                    document.getElementById('pasteable-root').style.left = 'unset';
                    setSide('right');
                }

                if (side === 'right') {
                    document.getElementById('pasteable-root').style.left = 0;
                    setSide('left');
                }
            }} />
        </div>
    )
};

export default ToggleSide;