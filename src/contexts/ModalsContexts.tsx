import { createContext, useState } from "react";
import React from "react";


function ModalsContextData(){
    const [isOpenModalRegister, setIsOpenModalRegister] = useState<boolean>(false);
    const [isOpenModalAndDelete, setIsOpenModalAndDelete] = useState<boolean>(false);

    return {
        isOpenModalRegister, 
        setIsOpenModalRegister,
        isOpenModalAndDelete, 
        setIsOpenModalAndDelete
    }
}

interface IModalsContext {
    isOpenModalRegister: boolean, 
    setIsOpenModalRegister: (input: boolean) => void,
    isOpenModalAndDelete: boolean, 
    setIsOpenModalAndDelete: (input: boolean) => void,
}

export const ModalsContext = createContext({} as IModalsContext);

export function ModalsContextProvider({children}: {children: React.ReactNode}){
    return (<ModalsContext.Provider value={ModalsContextData()}>
        {children}
    </ModalsContext.Provider>)
}