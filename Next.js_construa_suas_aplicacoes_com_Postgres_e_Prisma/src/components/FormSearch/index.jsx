import Image from 'next/image';
import styles from './FormSearch.module.css';
import { Button } from '../Button';

export default function FormSearch() {
    return (
        <form action='/' className={styles.form}>
            <input name='q' placeholder='Digite aqui o que procura' className={styles.input} />
            <Button>Buscar</Button>
            {/* <Image src={imgSearch} /> */}
        </form>
    );
};
