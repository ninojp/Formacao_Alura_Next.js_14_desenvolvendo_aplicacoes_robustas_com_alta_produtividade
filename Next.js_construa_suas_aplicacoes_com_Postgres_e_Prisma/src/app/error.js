'use client' // Error components must be Client Components

import Image from 'next/image';
import { useEffect } from 'react';
import styles from './error.module.css';
import imgErro from '../../public/500.png';
import Link from 'next/link';
import ArrowBack from '@/components/ArrowBack';

export default function Error({ error }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className={styles.container}>
            <h2>Alguma coisa deu errado!</h2>
            <Image src={imgErro} width={657} height={367} alt='Imagem de Erro' />
            <p className={styles.text}>Não conseguimos carregar a página, volte para seguir navegando</p>
            <Link href='/' className={styles.linkVoltar}><ArrowBack /> Voltar ao Feed</Link>
        </div>
    )
}
