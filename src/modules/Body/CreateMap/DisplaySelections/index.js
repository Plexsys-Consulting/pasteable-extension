import TextInput from 'modules/common/components/TextInput';

const Element = ({id, path, name, text}) => (
    <div className="flex flex-row" onMouseUp={() => document.getElementById(`${id}`).addClass('highlighted')}>
        <TextInput value={name} />
    </div>
)

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