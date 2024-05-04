import { CardPost } from "@/components/CardPost";
import styles from "./page.module.css";
import logger from "@/logger";
import Link from "next/link";

// const post = {
//     "id": 1,
//     "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//     "title": "Introdução ao React",
//     "slug": "introducao-ao-react",
//     "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//     "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//     "author": {
//         "id": 101,
//         "name": "Ana Beatriz",
//         "username": "anabeatriz_dev",
//         "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
//     }
// };

// Criado durante a Aula========================================================================================
// async function getAllPosts() {
//     const response = await fetch('http://localhost:3042/posts');
//     if(!response.ok) {
//         logger.error('Ops! Algo deu Errado');
//     };
//     logger.info('Posts obtidos com sucesso');
//     return response.json();
// }

// Exercício, poderio ser feito assim============================================================================
// async function getAllPosts () {
//     try {
//       const response = await fetch('http://localhost:3042/postss');
//       if (!response.ok) throw new Error('Falha na rede');
//       return response.json();
//     } catch (error) {
//       logger.error('Ops, algo correu mal: ' + error.message);
//       return [];
//     }
//   }

// Exercício, Também poderio ser feito assim======================================================================
//Esta alternativa utiliza o método .catch() para capturar erros de rede e verifica se response é um objeto válido
//e se response.ok é verdadeiro antes de tentar converter a resposta em JSON.
async function getAllPosts(page) {
    const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=2`).catch(error => {
        logger.error('Erro de rede: ' + error.message);
        return null;
    });
    if (!response || !response.ok) {
        logger.error('Problema ao obter os posts');
        return [];
    }
    return response.json();
}

export default async function Home({searchParams}) {
    const currentPage = searchParams?.page || 1;
    const {data: posts, prev, next} = await getAllPosts(currentPage);
    return (
        <main className={styles.mainStyled}>
            {posts.map((post) => <CardPost key={post.key} post={post} />)}
            <div className={styles.divPaginacao}>
                <div className={styles.linksPaginacao}>
                    {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
                    {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
                </div>
            </div>
        </main>
    );
};
