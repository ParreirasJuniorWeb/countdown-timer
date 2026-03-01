import React, { useState } from "react";

const CountdownContext = React.createContext(null);

export const CountdownProvider = ({ children }) => {
    const [formData, setFormData] = useState(
        {
            title: "Contagem regressiva para 2027",
            date: "2026-12-31",
            image: "",
            color: "#000",
        }
    );

    return (
        <CountdownContext.Provider value={{ formData, setFormData }}>
            {children}
        </CountdownContext.Provider>
    );
};

export const useCountdown = () => {
    const context = React.useContext(CountdownContext);
    if (!context) {
        throw new Error("useCountdown deve ser usado dentro de CountdownProvider");
    }
    return context;
};

export default CountdownContext;