import './Post.css';
import styles from './Post.module.css';

import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';

export default function Post() {
    //Faz a busca de um objeto "post" em uma matriz de objetos "posts" com base em um parâmetro de URL "id".
    const parametros = useParams();

    //"useParams()" fornecida pelo React Router para acessar os parâmetros passados pela URL da página
    //A função "find()" é usada para encontrar o objeto "post" na matriz de "posts" que corresponde ao ID da URL
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }
    //"slice()" é usada para retornar apenas os quatro primeiros objetos "posts" da nova matriz classificada, que são armazenados na constante "postsRecomendados".
    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    //O conteúdo do post é renderizado em um elemento ReactMarkdown que converte o texto do post em HTML
    //há uma lista de posts recomendados renderizados no componente PostCard com o uso de uma constante "postsRecomendados" 
    //Este código faz parte de um aplicativo React que exibe posts e recomenda outros posts aos usuários.
    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                    <h2 className={styles.tituloOutrosPosts}>
                        Outros posts que você pode gostar:
                    </h2>

                    <ul className={styles.postsRecomendados}>
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}
                    </ul>

                    </PostModelo>
                } />
            </Route>
        </Routes>

    )
}