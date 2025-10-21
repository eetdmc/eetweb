"use client"

import { createContext, useContext, useState,Dispatch,SetStateAction } from "react";



const RefetchDestinationsContext = createContext<{refetchDestinations: boolean, setRefetchDestinations: Dispatch<SetStateAction<boolean>>}>({
    refetchDestinations: false,
    setRefetchDestinations: () => {},
});


export const useRefetchDestinations = () => useContext(RefetchDestinationsContext);

export const RefetchDestinationsProvider = ({ children }: { children: React.ReactNode }) => {
    const [refetchDestinations, setRefetchDestinations] = useState(false);
    return (
        <RefetchDestinationsContext.Provider value={{refetchDestinations, setRefetchDestinations}}>
            {children}
        </RefetchDestinationsContext.Provider>
    );
}
