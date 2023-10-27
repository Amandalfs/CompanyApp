import { useCompanies } from '../../hooks/useCompanies';
import styles from './styles.module.scss';

export function Search(){
    const { setQuery } = useCompanies();
    return (<div className={styles.content}>
        <input placeholder='Buscar empresa...' className={styles.search} type="search"
            onChange={(e)=> setQuery(e.target.value)}
        ></input>
    </div>)
}