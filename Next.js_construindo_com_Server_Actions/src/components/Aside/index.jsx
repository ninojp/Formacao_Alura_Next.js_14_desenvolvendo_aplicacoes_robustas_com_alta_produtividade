import Image from "next/image";
import logo from '@/assets/imgs/logo.png';
import styles from './Aside.module.css';
import Link from "next/link";

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Link href='/'>
                <Image src={logo} width={128} height={40} priority={true} alt="Logo da Code Connect" />
            </Link>
        </aside>
    );
};
