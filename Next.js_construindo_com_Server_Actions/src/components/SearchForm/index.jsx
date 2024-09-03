import styles from './SearchForm.module.css';
import { Button } from '../Button';

export const SearchForm = () => {
    return (<form className={styles.form} action='/'>
            <input
                name='q'
                className={styles.input}
                placeholder='Digite aqui o que procura'
            />
            <Button>
                Buscar
            </Button>
        </form>
    );
};
