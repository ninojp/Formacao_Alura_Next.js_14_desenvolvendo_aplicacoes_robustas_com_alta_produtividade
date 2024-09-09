import Image from 'next/image';
import styles from './not-found.module.css';
import img404 from '../../public/404.png';
import Link from 'next/link';
import ArrowBack from '@/components/Icons/ArrowBack';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1>Ops! nada encontrado</h1>
            <Image src={img404} width={657} height={367} alt='Imagem error 404' />
            <p className={styles.text}>Você pode voltar para pagina de posts no link abaixo</p>
            <Link href='/' className={styles.linkVoltar}><ArrowBack /> Voltar para Post</Link>
        </div>
    )
}; 
