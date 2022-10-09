import { FaGithub } from 'react-icons/fa';
import styles from './buttonSourceCode.module.css';

const ButtonSourceCode = (props) => {
    const {link} = props
    return (
    <a target="_blank" rel="noopener noreferrer" className={styles.btn} href={link}> <span className={styles.icon}><FaGithub/></span> <span>source code</span></a>
    );
};

export default ButtonSourceCode;

