import { createContext, useState, useContext } from 'react';

export const Context = createContext();
export const usePasteableContext = () => (useContext(Context));

export default ({ children }) => {
    const [showView, setShowView] = useState('create');
    return (
        <Context.Provider value={[showView, setShowView]}>
            {children}
        </Context.Provider>
    )
}