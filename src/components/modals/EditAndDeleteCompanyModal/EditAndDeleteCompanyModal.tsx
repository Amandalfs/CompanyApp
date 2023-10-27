import styles from './styles.module.scss';
import close from '../../../assets/close.svg';
import trash from '../../../assets/lixo.svg';
import { useModals } from '../../../hooks/useModals';
import { useCompanies } from '../../../hooks/useCompanies';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';

export function EditAndDeleteCompanyModal(){
    const { closeModalAndDelete } = useModals();
    const { formCompanyEditOrDelete, editCompany, deleteCompany } = useCompanies();

    const dataEditCompanyValidSchema = zod.object({
        name: zod.string().min(1, "Preencha todos os campos"),
		email: zod.string().email("Email precisa ser valido"),
        cnpj: zod.string().refine((value)=>{
            const cnpjPattern = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
            return cnpjPattern.test(value);
        },
        'deve passar o formato: XX.XXX.XXX/XXXX-XX')
	});
		
    type IDataEditCompanyValidSchema = zod.infer<typeof  dataEditCompanyValidSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<IDataEditCompanyValidSchema>({
        resolver: zodResolver(dataEditCompanyValidSchema),
        defaultValues: {
            name: formCompanyEditOrDelete.name,
            cnpj: formCompanyEditOrDelete.cnpj,
            email: formCompanyEditOrDelete.email,
        }       
    });


    function handleSuccess(data: IDataEditCompanyValidSchema){
        editCompany(formCompanyEditOrDelete.id, data);
        closeModalAndDelete();
    }

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
                <input type="text" id="" 
                className={errors.name?.message ? styles['error-input']: ''}
                    defaultValue={formCompanyEditOrDelete.name}
                    {...register('name')}
                />
                {
                    errors.name &&   
                    <div className={styles.errorMessage}>
                        {errors.name.message}
                    </div>
                }
            </div>
            <div className={styles.input}>
                <label>CNPJ</label>
                <input type="text" id=""
                    className={errors.cnpj?.message ? styles['error-input']: ''}
                    defaultValue={formCompanyEditOrDelete.cnpj}
                    {...register('cnpj')}
                />
                {
                    errors.cnpj &&   
                    <div className={styles.errorMessage}>
                        {errors.cnpj.message}
                    </div>
                }
            </div>
            <div className={styles.input}>
                <label>E-mail</label>
                <input type="text" id="" 
                    className={errors.email?.message ? styles['error-input']: ''}
                    defaultValue={formCompanyEditOrDelete.email}
                    {...register('email')}
                />
                {
                    errors.email &&   
                    <div className={styles.errorMessage}>
                        {errors.email.message}
                    </div>
                }
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
                    onClick={handleSubmit(handleSuccess)}
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