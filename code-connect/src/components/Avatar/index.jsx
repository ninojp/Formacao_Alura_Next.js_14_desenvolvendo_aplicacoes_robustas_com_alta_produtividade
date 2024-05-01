import Image from "next/image";
import styles from './Avatar.module.css';

// export const Avatar = ({post}) => {
export const Avatar = ({name, imgSrc}) => {
    return(
        <ul className={styles.ulStyled}>
            {/* <li><Image src={post.author.avatar} width={38} height={38}/></li> */}
            {/* <li>{post.author.username}</li> */}
            <li><Image src={imgSrc} width={32} height={32} alt={`Avatar do(a) ${name}`} /></li>
            <li>@{name}</li>
        </ul>
    );
};
