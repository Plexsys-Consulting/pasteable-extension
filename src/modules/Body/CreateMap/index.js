import { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { MapContext } from 'modules/common/contexts/MapContext';
import Select from 'modules/common/components/Select';
import Button from 'modules/common/components/Button';
import DisplaySelections from './DisplaySelections';
import { selectElements } from 'modules/common/functions';

const CreateMap = () => {
    const [selected, setSelected] = useState("copy");
    return (
        <MapContext>
            <div className="p-2">
                <Select
                    value={selected}
                    onChange={e => setSelected(e.target.value)}
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
                <DisplaySelections>
                    click elements in the page to add them to the {`${selected}`} map
                </DisplaySelections>
                <Button
                    className="sticky bottom-3 w-full"
                    icon={<FaSave className="inline mx-1 w-4" />}
                    text={`save ${selected} map`}
                />
            </div>
        </MapContext>
    )
};

export default CreateMap;