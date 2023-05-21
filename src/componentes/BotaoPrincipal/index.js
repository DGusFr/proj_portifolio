//Cria um componente de botão
//A função recebe dois parâmetros: children (efine o conteúdo) e tamanho (tamanho do botão).
import styles from './BotaoPrincipal.module.css';

export default function BotaoPrincipal({ children, tamanho }) {
    return (
        <button className={`
            ${styles.botaoPrincipal}
            ${styles[tamanho]}
        `}>
            {children}
        </button>
    )
}