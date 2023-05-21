import BotaoPrincipal from 'componentes/BotaoPrincipal';
import { Link } from 'react-router-dom';
import styles from './Post.module.css';

//"PostCard" envolve o HTML em um link React Router que aponta para um URL específico que depende do "id" do post. 
//tag "img" que carrega uma imagem a partir de um caminho relativo que depende do "id" do post
//título do post é renderizado como um cabeçalho de segundo nível ("h2") e é definido a partir do valor da propriedade "post.titulo"
//O botão de "ler" é renderizado usando um componente personalizado chamado "BotaoPrincipal
export default function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>

                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}