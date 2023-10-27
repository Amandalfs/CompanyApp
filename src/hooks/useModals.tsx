import { useContext } from "react";
import { ModalsContext } from "../contexts/ModalsContexts";

export function useModals(){
    const { isOpenModalRegister, setIsOpenModalRegister, isOpenModalAndDelete, setIsOpenModalAndDelete } = useContext(ModalsContext);

    function openModalRegister(){
        setIsOpenModalRegister(true);
    }

    function closeModalRegister(){
        setIsOpenModalRegister(false);
    }

    function openModalAndDelete(){
        setIsOpenModalAndDelete(true);
    }
    
    function closeModalAndDelete(){
        setIsOpenModalAndDelete(false);
    }

    return {
        isOpenModalRegister,
        setIsOpenModalRegister,
        isOpenModalAndDelete,
        setIsOpenModalAndDelete,
        openModalRegister,
        closeModalRegister,
        openModalAndDelete,
        closeModalAndDelete,
    }
}