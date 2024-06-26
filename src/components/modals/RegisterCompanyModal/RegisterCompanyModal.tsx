import styles from './styles.module.scss';
import close from '../../../assets/close.svg';
import trash from '../../../assets/lixo.svg';
import { useModals } from '../../../hooks/useModals';

import { useCompanies } from '../../../hooks/useCompanies';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


export function RegisterCompanyModal(){

    const { closeModalRegister } = useModals();
    const { registerCompany } = useCompanies();

    const dataRegisterCompanyValidSchema = zod.object({
        name: zod.string().min(1, 'Preencha o campo nome'),
		email: zod.string().email('Email precisa ser valido'),
		cnpj: zod.string().refine((value)=>{
            const cnpjPattern = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
            return cnpjPattern.test(value);
        },
        'deve passar o formato: XX.XXX.XXX/XXXX-XX'),
	});
		
		type IDataRegisterCompanyValidSchema = zod.infer<typeof  dataRegisterCompanyValidSchema>

		const { register, handleSubmit, formState: { errors }, reset } = useForm<IDataRegisterCompanyValidSchema>({
			resolver: zodResolver(dataRegisterCompanyValidSchema),
			defaultValues: {
                name: '',
                cnpj: '',
                email: '',
			}       
		});


        function handleSuccess(data: IDataRegisterCompanyValidSchema){
            registerCompany(data);
            reset();
            closeModalRegister();
		}

    return (<>
    <div className={styles.modal}>
        <header>
            <h1>Cadastrar empresa</h1>
            <img src={close} alt='' 
                onClick={()=>{
                    closeModalRegister();
                    reset();
                }}
            />
        </header>

        <div className={styles.inputs}>
            <div className={styles.input}>
                <label>Nome</label>
                <input type='text' id='' 
                    {...register('name')}
                    className={errors.name?.message ? styles['error-input']: ''}
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
                <input type='text' id='' 
                    {...register('cnpj')}
                    className={errors.cnpj?.message ? styles['error-input']: ''}
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
                <input type='text' id='' 
                    {...register('email')}
                    className={errors.email?.message ? styles['error-input']: ''}
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
            <img src={trash} alt='' />
            <div className={styles.btns}>
                <button className={styles.btnCancel}
                    onClick={()=>{
                        closeModalRegister();
                        reset();
                    }}
                >Cancelar</button>
                <button className={styles.btnRegister}
                    onClick={handleSubmit(handleSuccess)}
                >Cadastrar</button>
            </div>
        </div>
    </div>
    <div className={styles.filter} 
        onClick={()=>{
            closeModalRegister();
            reset();
        }}
    />
    </>)
}