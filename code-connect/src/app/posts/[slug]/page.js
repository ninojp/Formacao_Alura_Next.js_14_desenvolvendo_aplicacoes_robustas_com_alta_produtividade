import logger from "@/logger";
import styles from './postStyles.module.css';
import Image from "next/image";
import { Avatar } from "@/components/Avatar";
import { remark } from 'remark';
import html from 'remark-html';
//================================================================
async function getPostBySlug(slug) {
    const url = `http://localhost:3042/posts?slug=${slug}`;
    const response = await fetch(url)
    if (!response.ok) {
        logger.error('Algo de errado não está certo!');
        return {}
    };
    logger.info('OK! Slug recebido com Sucesso');
    const data = await response.json();
    if (data.length === 0) {
        return {}
    };
    // return data[0];
    const post = data[0];
    const processedContent = await remark()
        .use(html)
        .process(post.markdown);
    const contentHtml = processedContent.toString();
    post.markdown = contentHtml;
    return post;
}
//================================================================
const PagePost = async ({ params }) => {
    const slug = params.slug;
    const post = await getPostBySlug(slug);
    return (
        <section className={styles.sectionStyled}>
            <h2>{post.title}</h2>
            <Image src={post.cover} alt={post.title} width={438} height={133} />
            <p>{post.body}</p>
            {/* <div>
                <pre className={styles.divPre}>{post.markdown}</pre>
            </div> */}
            <div dangerouslySetInnerHTML={{ __html: post.markdown }} className={styles.divPre}/>
            <div className={styles.divAvatar}>
                <Avatar name={post.author.username} imgSrc={post.author.avatar} />
            </div>
            {console.log(post)}
        </section>
    )
};
export default PagePost;
