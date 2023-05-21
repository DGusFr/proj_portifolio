import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Antônio!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Olá, tudo bem?.
            </p>
            <p className={styles.paragrafo}>
                Minha jornada nas linhas de código começou em 2017 quando aprendi a programar na faculdade, principalmente desenvolvimento Back-end, nas linguagen C e Python.
            </p>
            <p className={styles.paragrafo}>
                Hoje eu curso Ánalise e Desenvolvimento de Sistemas e me encontrei no desenvolvimento Front-end.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido apenas aprendizados atrás de aprendizados, cada dia tendo de aprender coisas novas e fortificar o conhecimento no que já tenho.
            </p>
            <p className={styles.paragrafo}>
                Não deixe de conferior meus projetos 😃
            </p>
        </PostModelo>
    )
}