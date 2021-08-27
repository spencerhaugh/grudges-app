import React, { createContext } from "react";
import GrudgeReducer from "../reducers/GrudgeReducer";
import seedData from "../seed";
import useLocalStorageReducer from '../reducers/useLocalStorageReducer';

export const GrudgeContext = createContext();
export const DispatchContext = createContext();

export function GrudgeProvider(props) {
    // const [grudges, dispatch] = useReducer(GrudgeReducer, seedData);
    const [grudges, dispatch] = useLocalStorageReducer('grudges', seedData, GrudgeReducer);
    return (
        <GrudgeContext.Provider value={grudges}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </GrudgeContext.Provider>
    )
};