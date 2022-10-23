import styles from './Header.module.css'
import logoDesafio from '../../assets/logo.svg'

export function Header() {
    return (
        <div className={styles.menu_header}>
            <img src={logoDesafio} alt="" />
        </div>
    )
}
