import styles from './styles.module.scss';
import logo from '../../assets/logo opea.svg';
import avatar from '../../assets/icon-user.svg';

export function Header(){
    return (<header className={styles.header}>
        <img src={logo} alt="" />
        <div>
            usuario
            <img src={avatar} alt="" />
        </div>
    </header>)
}