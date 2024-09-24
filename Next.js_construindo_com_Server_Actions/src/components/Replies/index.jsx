'use client'

import { useEffect, useState } from 'react';
import styles from './replies.module.css';
import { Comment } from '../Comment';
import { ModalReply } from '../ModalReply';

export const Replies = ({ comment }) => {
    const [showReplies, setShowReplies] = useState(false);
    const [replies, setReplies] = useState([]);

    async function fetchData() {
        const response = await fetch(`/api/comment/${comment.id}/replies`)
        const data = await response.json()
        setReplies(data)
    };
    useEffect(() => {
        if(showReplies){
            fetchData()
        }
    }, [showReplies]);

    return (<div className={styles.container}>
        <div className={styles.replies}>
            <button
                onClick={() => setShowReplies(!showReplies)}
                className={styles.btn}>
                {showReplies ? 'Ocultar' : 'Ver'} Respostas
            </button>
            {showReplies && <ul>
                {replies.map(reply => <li key={reply.id}>
                    <Comment comment={reply}/>
                    <ModalReply comment={reply} />
                </li>)}
            </ul>}
        </div>
    </div>);
};
