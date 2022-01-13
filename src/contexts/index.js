import { createContext, useState } from 'react';

export const Context = createContext();

export default ({ children }) => {
    const [showView, setShowView] = useState('create');
    return (
        <Context.Provider value={[showView, setShowView]}>
            {children}
        </Context.Provider>
    )
}