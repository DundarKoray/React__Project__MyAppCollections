import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './buttonReturn.module.css'

const ButtonReturn = (props) => {
    const {text} = props
    return (
        <Link to="/" className={styles.btn}><FaArrowLeft /> {text}</Link>
    );
};

export default ButtonReturn;