import styles from './Banner.module.css';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Bem vindo ao meu espaço! Meu nome é Diego Franco, sou desenvolvedor Front-end. Aqui compartilho meus projetos e conhecimentos.
                </p>
            </div>

            <div className={styles.imagens}>

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto Diego"
                />
            </div>
        </div>
    )
}