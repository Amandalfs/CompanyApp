import { useModals } from '../../hooks/useModals';
import styles from './styles.module.scss';

export function ButtonAddCompany(){
    const  { openModalRegister } = useModals();
    return (<div className={styles.buttonAddCompany} onClick={() => {
        openModalRegister();
    }}>
        <p>Adicionar Empresa</p>
    </div>)
}