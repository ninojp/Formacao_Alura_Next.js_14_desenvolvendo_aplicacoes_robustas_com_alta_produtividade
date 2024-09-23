'use client'

import { useState } from 'react';
import styles from './replies.module.css';

export const Replies = () => {
    const [showReplies, setShowReplies] = useState(false);
    return (<div className={styles.container}>
        <div className={styles.replies}>
            <button
                onClick={() => setShowReplies(!showReplies)}
                className={styles.btn}>
                {showReplies ? 'Ocultar' : 'Ver'} Respostas
            </button>
        </div>
    </div>);
};
