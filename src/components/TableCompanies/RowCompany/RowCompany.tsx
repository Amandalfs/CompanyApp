import styles from './styles.module.scss';
import company from '../../../assets/GroupVisible.svg';
import { useModals } from '../../../hooks/useModals';
import { useCompanies } from '../../../hooks/useCompanies';

interface CompanyProps {
    companyProps: {
        id: string;
        name: string;
        email: string;
        cnpj: string;
    }
}

export function RowCompany({ companyProps }: CompanyProps){
    const { openModalAndDelete } = useModals();
    const { setFormCompanyEditOrDelete } = useCompanies();

    return (<div className={styles.row}>
        <img src={company} alt=""
            onClick={()=>{
                setFormCompanyEditOrDelete(companyProps);
                openModalAndDelete();
            }}
        />
        <div>
            <h1>Nome da Empresa: {companyProps.name}</h1>
            <div>
                <p>CNPJ: {companyProps.cnpj}</p>
                -
                <p>Email: {companyProps.email}</p>
            </div>
        </div>
    </div>)
}