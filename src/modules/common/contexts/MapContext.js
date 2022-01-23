import { createContext, useState, useContext } from 'react';

const Context = createContext();
const useMapContext = () => (useContext(Context));

const MapContext = ({ children }) => {
    const [maps, setMaps] = useState({copyMaps: [], pasteMaps: []});
    return (
        <Context.Provider value={[maps, setMaps]}>
            {children}
        </Context.Provider>
    )
};

export {MapContext, useMapContext};