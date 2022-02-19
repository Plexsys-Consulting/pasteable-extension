import { useState, useEffect } from 'react';
import { FaSave } from 'react-icons/fa';
import { useMapContext } from 'modules/common/contexts/MapContext';
import Select from 'modules/common/components/Select';
import Button from 'modules/common/components/Button';
import DisplaySelections from './DisplaySelections';
import { selectElement } from 'modules/common/functions';

const CreateMap = () => {
    const [maps, setMaps] = useMapContext();
    const [copyPaste, setCopyPaste] = useState("copy");
    const [newMap, setNewMap] = useState({id: Date.now(), name: "new copy map", elements: []});
    
    useEffect(() => {
        (async() => {
            try {
                const newMapElements = newMap.elements;
                const appendedElementArr = await selectElement(newMapElements);
                setNewMap({...newMap, elements: [...appendedElementArr]});
            } catch (error) {
                console.error(error)
            }
        })()
    }, [newMap])
    return (
        <div className="p-2">
            <Select
                value={copyPaste}
                onChange={e => setCopyPaste(e.target.value)}
                options={[
                    {
                        value: "copy",
                        text: "create copy map"
                    },
                    {
                        value: "paste",
                        text: "create paste map"
                    }
                ]}
            />
            <DisplaySelections elements={newMap.elements} copyPaste={copyPaste} />
            <Button
                className="sticky bottom-3 w-full"
                icon={<FaSave className="inline mx-1 w-4" />}
                text={`save ${copyPaste} map`}
            />
        </div>
    )
};

export default CreateMap;