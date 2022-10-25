import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import styles from './question.module.scss';

const Question = ({id, title, info}) => {
  const [showInfo, setShowInfo] = useState(false)
  
  return (
    <div onClick={()=> {setShowInfo(!showInfo)}} className={styles.questionAndAnswer}>
      <div className={styles.questionContainer}>
        <h4 className={styles.question}>{title}</h4>
        <button onClick={()=> {setShowInfo(!showInfo)}}>{!showInfo ? <AiOutlinePlus /> :  <AiOutlineMinus />}</button>
      </div>
      {showInfo ?
        <div className={styles.answer}>
          <p>i{info}</p>
        </div>
        : null
      }
    </div>
  );
};

export default Question;
