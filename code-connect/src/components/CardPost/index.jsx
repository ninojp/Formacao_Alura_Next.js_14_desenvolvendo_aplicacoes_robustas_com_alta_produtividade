import Image from "next/image";
// import imgHeader from "@/assets/imgs/imgHeader.jpg"
import { Avatar } from "../Avatar";
import styles from './CardPost.module.css';
import Link from "next/link";

export const CardPost = ({ post, highlight }) => {
    // console.log(post)
    return (
        <Link href={`/posts/${post.slug}`} className={styles.link}>
             <article className={styles.card} style={{ width: highlight ? 993 : 486}}>
                <header className={styles.header}>
                    <figure style={{ height: highlight ? 300 : 133}}>
                        <Image
                            src={post.cover}
                            fill
                            alt={`Capa do post de titulo: ${post.title}`}
                        />
                    </figure>
                    </header>
                <section className={styles.body}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </section>
                <footer className={styles.footer}>
                    <Avatar
                        imgSrc={post.author.avatar}
                        name={post.author.username}
                    />
                </footer>
            </article>
        </Link>
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

