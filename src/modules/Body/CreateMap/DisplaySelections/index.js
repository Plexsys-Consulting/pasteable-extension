import { useRef } from 'react';
import TextInput from 'modules/common/components/TextInput';
import Icon from 'modules/common/components/Icon';
import { FaTrash } from 'react-icons/fa';
import { useEffect } from 'react/cjs/react.development';

const Element = ({id, path, name, text}) => {
    const displayed = useRef(null);
    useEffect(() => {
        displayed.current.addEventListener('mouseover', () => document.getElementById(`${id}`).classList.add('highlighted'));
        displayed.current.addEventListener('mouseleave', () => document.getElementById(`${id}`).classList.remove('highlighted'));
    }, [displayed])

    return (
        <div className="flex flex-row cursor-pointer" ref={displayed}>
            <TextInput value={name} />
            <Icon 
                icon={<FaTrash />}
                className="hover:text-red-600 hover:cursor-pointer active:text-red-400 active:scale-[.97]"
                tooltip="remove element"
            />
        </div>
    )
}

const DisplaySelections = ({elements, copyPaste}) => (
    <div className="overflow-y-auto max-h-fit my-3">
        {elements.length <= 0?
            `click elements in the page to add them to the ${copyPaste} map`
            :
            elements.map(e => <Element {...e} key={e.path} />)
        }
    </div>
)

export default DisplaySelections;