import { createContext, useState } from "react";

export interface Companies {
    id: string;
    name: string;
    email: string;
    cnpj: string;
}

export interface FormCompanyEditOrDelete {
    id: string;
    name: string;
    email: string;
    cnpj: string;
}

function CompanyContextData(){
    const [companies, setCompanies] = useState<Companies[]>([]);
    const [query, setQuery] = useState<string>('');
    const [updateList, setUpdateList] = useState<boolean>(false);
    const [formCompanyEditOrDelete, setFormCompanyEditOrDelete] = useState<FormCompanyEditOrDelete>({
        name: '',
        cnpj: '',
        email: '',
        id: '',
    }) 

    return {
        companies,
        setCompanies,
        query,
        setQuery,
        updateList, 
        setUpdateList,
        formCompanyEditOrDelete,
        setFormCompanyEditOrDelete
    }
}

interface ICompanyContext {
    companies: Companies[],
    setCompanies: (input: Companies[]) => void,
    query: string,
    setQuery: (input: string) => void,
    updateList: boolean, 
    setUpdateList: (input: boolean) => void,
    formCompanyEditOrDelete: FormCompanyEditOrDelete,
    setFormCompanyEditOrDelete: (input: FormCompanyEditOrDelete) => void,
}

export const CompanyContext = createContext({} as ICompanyContext);

export function CompanyContextProvider({children}){
    return (<CompanyContext.Provider value={CompanyContextData()}>
        {children}
    </CompanyContext.Provider>)
}