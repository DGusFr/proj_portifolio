import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    INÍCIO
                </MenuLink>
                <MenuLink to="/sobremim">
                    SOBRE MIM
                </MenuLink>
            </nav>
        </header>
    )
}