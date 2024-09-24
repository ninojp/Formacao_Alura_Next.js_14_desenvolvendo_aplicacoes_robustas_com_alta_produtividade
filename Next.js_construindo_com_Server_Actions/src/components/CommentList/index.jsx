import { Comment } from "../Comment";
import { ModalReply } from "../ModalReply";
import { Replies } from "../Replies";
import styles from './commentList.module.css';

export const CommentList = ({ comments }) => {
    return (<section className={styles.comments}>
        <h2>Comentários</h2>
        <ul className={styles.ulCommentList}>
            {comments.map(comment => <li>
                <Comment comment={comment} key={comment.id} />
                <ModalReply comment={comment} />
                <Replies comment={comment}/>
                <hr/>
            </li>)}
        </ul>
    </section>);
};
