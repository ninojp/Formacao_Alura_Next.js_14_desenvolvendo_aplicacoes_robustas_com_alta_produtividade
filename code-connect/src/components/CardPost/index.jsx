import Image from "next/image";
// import imgHeader from "@/assets/imgs/imgHeader.jpg"
import { Avatar } from "../Avatar";
import styles from './CardPost.module.css';

export const CardPost = ({post}) => {
    // console.log(post)
    return(
        <article className={styles.card}>
            <header className={styles.header}>
                <figure >
                    {/* <Image src={imgHeader} width={438} height={133} alt="Imagem header do Post" /> */}
                    <Image src={post.cover} width={438} height={133} alt={`Imagem ${post.title}`} />
                </figure>
            </header>
            <section className={styles.body}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer className={styles.footer}>
                {/* <Avatar post={post} /> */}
                <Avatar name={post.author.username} imgSrc={post.author.avatar} />
            </footer>
        </article>
    );
};
