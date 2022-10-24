import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import styles from './question.module.scss';

const Question = ({id, title, info}) => {
  
  return (
    <div className={styles.questionContainer}>
      <h4 className={styles.question}>{title}</h4>
      <AiOutlinePlus />
    </div>
  );
};

export default Question;
