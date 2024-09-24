'use client'

import { useRef } from "react";
import { Modal } from "../Modal";
import { Textarea } from "../Textarea";
import { postReply } from "@/action";
import { Comment } from "../Comment";
import { SubmitButton } from "../SubmitButton";
import styles from './modalReply.module.css';

export const ModalReply = ({ comment, post }) => {
    const modalRef = useRef(null);
    const openModal = () => {
        modalRef.current.openModal();
    };
    const action = postReply.bind(null, comment);
    return (<>
        <Modal ref={modalRef}>
            <form action={action} onSubmit={() => modalRef.current.closeModal()}>
                <div className={styles.body}>
                    <Comment comment={comment} />
                </div>
                <div className={styles.divider}></div>
                <Textarea name='text' require="true" rows={6} placeholder='Digite aqui sua resposta' />
                <div className={styles.footer}>
                    <SubmitButton>Responder</SubmitButton>
                </div>
            </form>
        </Modal>
        <button className={styles.btn} onClick={openModal}>
            Responder
        </button>
    </>);
};
