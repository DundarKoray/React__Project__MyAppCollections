import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import InnerNavBar from '../InnerNavBar/InnerNavBar';

import styles from './app.module.scss'

function App() {

  const [questions, setQuestions] = useState(data);
  // console.log(questions);

  return (  
    <SimpleHero>
      <Banner>
        <InnerNavBar />
        <div className={styles.container}>
          <div className={styles.app}>
            <div className={styles.left}><h2>Questions and answers about login</h2></div>
            <div className={styles.right}>
              {questions.map((question)=>{
                return <SingleQuestion key={question.id} {...question} />
              })}
            </div>
          </div>
        </div>
      </Banner>
    </SimpleHero>
  );
}

export default App;
