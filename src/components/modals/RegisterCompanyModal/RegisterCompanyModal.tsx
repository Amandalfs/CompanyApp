import styles from './styles.module.scss';
import close from '../../../assets/close.svg';
import trash from '../../../assets/lixo.svg';
import { useModals } from '../../../hooks/useModals';

import { useState } from 'react';
import { useCompanies } from '../../../hooks/useCompanies';

interface Form {
    name: string;
    email: string;
    cnpj: string;
}


export function RegisterCompanyModal(){
    const [form, setForm] = useState<Form>({
        name: '',
        email: '',
        cnpj: '',
    })

    function cleanForm(){
        setForm({
            name: '',
            email: '',
            cnpj: '',
        })
    }


    const { closeModalRegister } = useModals();
    const { registerCompany } = useCompanies();

    return (<>
    <div className={styles.modal}>
        <header>
            <h1>Cadastrar empresa</h1>
            <img src={close} alt="" 
                onClick={()=>{
                    closeModalRegister();
                    cleanForm();
                }}
            />
        </header>

        <div className={styles.inputs}>
            <div className={styles.input}>
                <label>Nome</label>
                <input type="text" name="" id="" 
                    onChange={(e) => {
                        setForm((prevState) => ({...prevState, name: e.target.value}))
                    }}
                />
            </div>
            <div className={styles.input}>
                <label>CNPJ</label>
                <input type="text" name="" id="" 
                     onChange={(e) => {
                        setForm((prevState) => ({...prevState, cnpj: e.target.value}))
                    }}
                />
            </div>
            <div className={styles.input}>
                <label>E-mail</label>
                <input type="text" name="" id="" 
                     onChange={(e) => {
                        setForm((prevState) => ({...prevState, email: e.target.value}))
                    }}
                />
            </div>
        </div>

        <div className={styles.footer}>
            <img src={trash} alt="" />
            <div className={styles.btns}>
                <button className={styles.btnCancel}
                    onClick={()=>{
                        closeModalRegister();
                        cleanForm();
                    }}
                >Cancelar</button>
                <button className={styles.btnRegister}
                    onClick={async ()=>{
                        await registerCompany(form);
                        cleanForm();
                        closeModalRegister();
                    }}
                >Cadastrar</button>
            </div>
        </div>
    </div>
    <div className={styles.filter} 
        onClick={()=>{
            closeModalRegister();
                    cleanForm();
        }}
    />
    </>)
}