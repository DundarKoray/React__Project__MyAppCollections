
import styles from './simpleHero.module.scss'


const SimpleHero = ({children}) => {
    return (
        <main className={styles.defaultHero}>
            {children}
        </main>
    );
};

export default SimpleHero;