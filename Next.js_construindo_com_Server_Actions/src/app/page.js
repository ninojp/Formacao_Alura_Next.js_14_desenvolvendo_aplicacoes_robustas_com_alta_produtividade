import { CardPost } from "@/components/CardPost";
import styles from "./page.module.css";
import logger from "@/logger";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import db from "../../prisma/db";

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
// async function getAllPosts(page) {
//     const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=4`).catch(error => {
//         logger.error('Erro de rede: ' + error.message);
//         return null;
//     });
//     if (!response || !response.ok) {
//         logger.error('Problema ao obter os posts');
//         return [];
//     }
//     return response.json();
// }

//Agora no segundo curso da formação estamos usando um Banco de daso Postgre=====================================
async function getAllPosts(page, searchTerm){
    try {
        const where = {}
        if (searchTerm) {
          where.title = {
            contains: searchTerm,
            mode: 'insensitive'
          }
        }
        const porPagina = 4;
        const skip = (page - 1) * porPagina;
        const totalItens = await db.post.count({ where });
        const totalPages = Math.ceil(totalItens / porPagina);
        const prev = page > 1 ? page - 1 : null;
        const next = page < totalPages ? page + 1 : null; 

        const posts = await db.post.findMany({
            take: porPagina,
            skip,
            where,
            orderBy: {id: 'desc'},
            include: {
                author: true,
                comments: true
            }
        });
        return {data: posts, prev, next };
    } catch (error) {
        logger.error('Falha ao obter os Posts', {error});
        return {data: [], prev: null, next: null };
    }
}

export default async function Home({ searchParams }) {
    const currentPage = parseInt(searchParams?.page || 1);
    const searchTerm = searchParams?.q
    const { data: posts, prev, next } = await getAllPosts(currentPage, searchTerm);
    return (
        <main className={styles.mainStyled}>
            {posts.map(post => <CardPost key={post.id} post={post} />)}
            <div className={styles.divPaginacao}>
                <div className={styles.linksPaginacao}>
                    {prev && <Link href={{pathname: '/', query: {page: prev, q: searchTerm}}}>
                        <FontAwesomeIcon icon={faCircleArrowLeft} style={{ width: '14px', color:'#fff' }} />Página anterior
                    </Link>}
                    {next && <Link href={{pathname: '/', query: {page: next, q: searchTerm}}}>
                        Próxima página<FontAwesomeIcon icon={faCircleArrowRight} style={{ width: '14px', color:'#fff' }} />
                    </Link>}
                </div>
            </div>
        </main>
    );
};
