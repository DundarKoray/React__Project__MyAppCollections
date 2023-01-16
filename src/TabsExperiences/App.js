import React, { useState } from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import InnerNavBar from '../InnerNavBar/InnerNavBar';
import Title from '../Title/Title';
import styles from './app.module.scss';

//API
const url = 'https://course-api.com/react-tabs-project'

function App() {

  //loading and initial value is true
  const [loading, setLoading] = useState(false);
  
  //jobs and initial value is empty array
  const [jobs, setJobs] = useState([" "]);

  return (  
    <SimpleHero>
      <Banner>
        <InnerNavBar />
        <div className="goals">
          Goals
          <br />1: Fetch the data from an API.
          <br />2: .
          <br />3: .
        </div>
        <div className={styles.app}>
          <Title dark={true} title={'Tabs Experiences'} />
          
        </div>
      </Banner>
    </SimpleHero>
  );
}

export default App;
