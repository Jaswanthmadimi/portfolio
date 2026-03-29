import { createContext, useContext, useState, ReactNode } from "react";

interface MatrixContextType {
    isMatrixMode: boolean;
    setMatrixMode: (value: boolean) => void;
}

const MatrixContext = createContext<MatrixContextType | undefined>(undefined);

export const MatrixProvider = ({ children }: { children: ReactNode }) => {
    const [isMatrixMode, setMatrixMode] = useState(false);

    return (
        <MatrixContext.Provider value={{ isMatrixMode, setMatrixMode }}>
            {children}
        </MatrixContext.Provider>
    );
};

export const useMatrix = () => {
    const context = useContext(MatrixContext);
    if (!context) {
        throw new Error("useMatrix must be used within a MatrixProvider");
    }
    return context;
};
