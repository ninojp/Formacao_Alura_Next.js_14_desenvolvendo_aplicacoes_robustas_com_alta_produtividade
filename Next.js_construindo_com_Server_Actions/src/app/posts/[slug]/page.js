import logger from "@/logger";
import styles from './postStyles.module.css';
import { remark } from 'remark';
import html from 'remark-html';
import { CardPost } from "@/components/CardPost";
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";
import { CommentList } from "@/components/CommentList";
// import { Avatar } from "@/components/Avatar";
// import Image from "next/image";

//================================================================
// async function getPostBySlug(slug) {
// Usado anteriormante com API JSON SERVER
// const url = `http://localhost:3042/posts?slug=${slug}`;
// const response = await fetch(url)
// if (!response.ok) {
//     logger.error('Algo de errado não está certo!');
//     return {}
// };
// logger.info('OK! Slug recebido com Sucesso');
// const data = await response.json();
// if (data.length === 0) {
//     return {}
// };
// const post = data[0];
async function getPostBySlug(slug) {
    try {
        const post = await db.post.findFirst({
            where: {
                slug
            },
            include: {
                author: true,
                comments: {
                    include: {
                        author: true,
                        children: {
                            include: {
                                author: true
                            }
                        }
                    },
                    where: {
                        parentId: null
                    }
                }
            }
        });
        if (!post) {
            throw new Error(`O post com Slug: ${slug}, não foi encontrado!`)
        }
        const processedContent = await remark()
            .use(html)
            .process(post.markdown);
        const contentHtml = processedContent.toString();
        post.markdown = contentHtml;
        return post;
    } catch (error) {
        logger.error('Falha ao obter o post com o slug: ', {
            slug,
            error
        })
    }
    redirect('/not-found');
}
//================================================================
const PagePost = async ({ params }) => {
    const slug = params.slug;
    const post = await getPostBySlug(slug);
    return (<div>
        <CardPost post={post} highlight />
        <h3 className={styles.subtitle}>Código:</h3>
        <div className={styles.code}>
            <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </div>
        <CommentList comments={post.comments} />
    </div>);
    // MEU CODIGO
    // <section className={styles.sectionStyled}>
    //     <h2>{post.title}</h2>
    //     <figure className={styles.figureStyled}>
    //         {/* <Image src={post.cover} alt={post.title} width={438} height={133} /> */}
    //         <Image src={post.cover} alt={post.title} width={700} height={133} />
    //         {/* <Image fill src={post.cover} alt={post.title}
    //             sizes="(max-width: 368px) 100vw, (max-width: 200px) 50vw"
    //             style={{top: '100px'}}
    //         /> */}
    //     </figure>
    //     <p>{post.body}</p>
    //     {/* <div>
    //         <pre className={styles.divPre}>{post.markdown}</pre>
    //     </div> */}
    //     <div dangerouslySetInnerHTML={{ __html: post.markdown }} className={styles.divPre}/>
    //     <div className={styles.divAvatar}>
    //         <Avatar name={post.author.username} imgSrc={post.author.avatar} />
    //     </div>
    //     {console.log(post)}
    // </section>
};
export default PagePost;
