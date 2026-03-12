import { createContext, useContext, useState } from "react";

const CountContext = createContext(null);

// ^ Nuovo componente custom che conterra' tutto quello  che gli passiamo dopo averlo wrappato con un context e il suo provider
function CountProvider({ children }) {

    const defaultData = {
        language: "it-IT",
        subscriptionYears: 4,
        darkMode: false,
        likesCounter: 11,
        cartProducts: 3,
    }

    const [data, setData] = useState(defaultData)
    return <CountContext.Provider
        value={[
            data,
            setData
        ]}
    >
        {children}
    </CountContext.Provider >
}

function useCount() {
    const context = useContext(CountContext);
    return context;
}

export { CountProvider, useCount };

// export { CountContext, A , B,  C };
// import { CountContext }  dal file ...