import { createContext, useState, useContext } from 'react';

const Context = createContext();
const useViewContext = () => (useContext(Context));

const ViewContext = ({ children }) => {
    const [showView, setShowView] = useState('create');
    return (
        <Context.Provider value={[showView, setShowView]}>
            {children}
        </Context.Provider>
    )
};

export {ViewContext, useViewContext};