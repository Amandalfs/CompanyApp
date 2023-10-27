import styles from './styles.module.scss';
import close from '../../../assets/close.svg';
import trash from '../../../assets/lixo.svg';
import { useModals } from '../../../hooks/useModals';
import { useCompanies } from '../../../hooks/useCompanies';

export function EditAndDeleteCompanyModal(){
    const { closeModalAndDelete } = useModals();
    const { handleFormEditOrDelete, formCompanyEditOrDelete, editCompany, deleteCompany } = useCompanies();
    console.log(formCompanyEditOrDelete);

    return (<>
    <div className={styles.modal}>
        <header>
            <h1>Editar empresa</h1>
            <img src={close} alt=""
                onClick={()=>{
                    closeModalAndDelete();
                }} 
            />
        </header>

        <div className={styles.inputs}>
            <div className={styles.input}>
                <label>Nome</label>
                <input type="text" name="" id="" 
                    defaultValue={formCompanyEditOrDelete.name}
                    onChange={(e)=>{
                        handleFormEditOrDelete(e.target.value, 'name');
                    }}
                />
            </div>
            <div className={styles.input}>
                <label>CNPJ</label>
                <input type="text" name="" id=""
                    defaultValue={formCompanyEditOrDelete.cnpj}
                    onChange={(e)=>{
                        handleFormEditOrDelete(e.target.value, 'cnpj');
                    }}
                />
            </div>
            <div className={styles.input}>
                <label>E-mail</label>
                <input type="text" name="" id="" 
                    defaultValue={formCompanyEditOrDelete.email}
                    onChange={(e)=>{
                        handleFormEditOrDelete(e.target.value, 'email');
                    }}
                />
            </div>
        </div>

        <div className={styles.footer}>
            <img src={trash} alt=""
                onClick={()=>{
                    deleteCompany(formCompanyEditOrDelete.id);
                    closeModalAndDelete();
                }}
            />
            <div className={styles.btns}>
                <button className={styles.btnCancel}
                          onClick={()=>{
                            closeModalAndDelete();
                        }} 
                >Cancelar</button>
                <button className={styles.btnRegister}
                    onClick={()=>{
                        const { name, email, cnpj, id } = formCompanyEditOrDelete;
                        editCompany(id, {
                            name,
                            email,
                            cnpj,
                        })
                        closeModalAndDelete();
                    }}
                >Editar</button>
            </div>
        </div>
    </div>
    <div className={styles.filter}
        onClick={()=>{
            closeModalAndDelete();
        }} 
    />
    </>)
}