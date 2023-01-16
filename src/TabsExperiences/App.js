import React, { useEffect, useState } from 'react';
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
  const [jobs, setJobs] = useState([]);

  //values and initial value is 0
  const [value, setValue] = useState(0);

  //fetch jobs function
  const fetchJobs = () => {
    const fetchJobs = async () => {
      const reponse = await fetch(url)
      const newJobs = await reponse.json()
      setJobs(newJobs)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

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
          {
            loading ?
              <section className='loading'>
                <h1>Loading...</h1>
              </section> 
            : <Title dark={true} title={'Tabs Experiences'} />
          }
        </div>
      </Banner>
    </SimpleHero>
  );
}

export default App;
