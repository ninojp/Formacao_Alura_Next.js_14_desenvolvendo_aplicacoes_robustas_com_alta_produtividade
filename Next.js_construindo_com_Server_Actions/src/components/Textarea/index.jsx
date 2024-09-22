import styles from './textarea.module.css';

export const Textarea = ({children, ...rest}) => {
    return(
        <textarea className={styles.textarea} {...rest}>{children}</textarea>
    );
};
