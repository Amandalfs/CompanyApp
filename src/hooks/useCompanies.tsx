import { useContext, useEffect } from "react";
import { api } from "../api/api";
import { CompanyContext } from "../contexts/CompanyContext";
import { toast } from "react-toastify";

export function useCompanies(){
    const { 
        companies, 
        setCompanies, 
        query, 
        setQuery, 
        updateList, 
        setUpdateList,
        formCompanyEditOrDelete,
        setFormCompanyEditOrDelete
     } = useContext(CompanyContext);
     
    useEffect(() => {
        const timer = setTimeout(() => {
            listCompanies();
        }, 500);

        return () => {
            clearTimeout(timer);
        }
    }, [query]);

    async function listCompanies(){
        const { data } = await api.get('/clients', {
            params: {
                text: query
            }
        });
        setCompanies(data);
    }

    async function registerCompany(data: {
        name: string;
        cnpj: string;
        email: string;
    }){
        await api.post('/clients', {
            name: data.name,
            cnpj: data.cnpj,
            email: data.email,
        })
        listCompanies();
        toast.success('Adicionado a empresa');
    }

    async function editCompany(id: string, data: {
        name: string;
        email: string;
        cnpj: string;
    }) {
        await api.put(`/clients/${id}`, {
            name: data.name,
            cnpj: data.cnpj,
            email: data.email,
        })
        listCompanies();
        toast.success('Atualizado a empresa');
    }

    async function deleteCompany(id: string) {
        await api.delete(`/clients/${id}`)
        listCompanies();
        toast.success('Empresa removida');
    }

    return {
        companies, 
        setCompanies,
        query, 
        setQuery,
        registerCompany,
        updateList,
        setUpdateList,
        editCompany,
        deleteCompany,
        formCompanyEditOrDelete,
        setFormCompanyEditOrDelete
    }
}