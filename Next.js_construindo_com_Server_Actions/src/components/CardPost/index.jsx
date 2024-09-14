import Image from "next/image";
// import imgHeader from "@/assets/imgs/imgHeader.jpg"
import { Avatar } from "../Avatar";
import styles from './CardPost.module.css';
import Link from "next/link";
import { incrementThumbsUp } from "@/action";
import { ThumbsUpButton } from "./ThumbsUpButton";
import { ModalComment } from "../ModalComment";

export const CardPost = ({ post, highlight }) => {
    // console.log(post)
    const submitThumbsUp = incrementThumbsUp.bind(null, post)
    return (
        <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
            <header className={styles.header}>
                <figure style={{ height: highlight ? 300 : 133 }}>
                    <Image
                        src={post.cover}
                        fill
                        alt={`Capa do post de titulo: ${post.title}`}
                    // width={300}
                    // height={133}
                    />
                </figure>
            </header>
            <section className={styles.body}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <Link className={styles.link} href={`/posts/${post.slug}`}>Ver Detalhes</Link>
            </section>
            <footer className={styles.footer}>
                <div>
                    <form action={submitThumbsUp}>
                        <ThumbsUpButton />
                        <p>{post.likes}</p>
                    </form>
                    <div>
                        <ModalComment />
                        <p>{post.comments.length}</p>
                    </div>
                </div>
                <Avatar
                    imgSrc={post.author.avatar}
                    name={post.author.username}
                />
            </footer>
        </article>
        //MEU CODIGO
        // <Link href={`/posts/${post.slug}`} className={styles.link}>
        //     <article className={styles.card}>
        //         <header className={styles.header}>
        //             <figure >
        //                 {/* <Image src={imgHeader} width={438} height={133} alt="Imagem header do Post" /> */}
        //                 <Image src={post.cover} width={438} height={133} alt={`Imagem ${post.title}`} />
        //             </figure>
        //         </header>
        //         <section className={styles.body}>
        //             <h2>{post.title}</h2>
        //             <p>{post.body}</p>
        //         </section>
        //         <footer className={styles.footer}>
        //             {/* <Avatar post={post} /> */}
        //             <Avatar name={post.author.username} imgSrc={post.author.avatar} />
        //         </footer>
        //     </article>
        // </Link>
    );
};

