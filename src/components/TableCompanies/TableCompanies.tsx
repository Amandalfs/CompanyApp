import styles from './styles.module.scss';
import { RowCompany } from './RowCompany/RowCompany';
import { useCompanies } from '../../hooks/useCompanies';

export function TableCompanies(){
    const { companies } = useCompanies();
    return(<div className={styles.table}>
        {
            companies.map((company)=>{
                return <RowCompany key={company.id} companyProps={company} />
            })
        }
    </div>)
}