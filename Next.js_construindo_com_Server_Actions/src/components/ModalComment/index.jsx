'use client'

import { useRef } from "react";
import { IconButton } from "../IconButton";
import { Chat } from "../Icons/Chat";
import { Modal } from "../Modal";
import { Subheading } from "../Subheading";
import { Textarea } from "../Textarea";
import styles from './modalComment.module.css';
import { SubmitButton } from "../SubmitButton";

export const ModalComment = ({ action }) => {
    const modalRef = useRef(null);
    return (<>
        <Modal ref={modalRef}>
            <form action={action} onSubmit={() => modalRef.current.closeModal()}>
                <Subheading>Deixe seu comentário sobre o Post:</Subheading>
                <Textarea required rows={8} name="text" placeholder="Digite seu comentário" />
                <div className={styles.footer}>
                    <SubmitButton>Comentar</SubmitButton>
                </div>
            </form>
        </Modal>
        <IconButton onClick={() => modalRef.current.openModal()}>
            <Chat />
        </IconButton>
    </>);
};
