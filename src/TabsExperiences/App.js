import React, { useEffect, useState } from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import InnerNavBar from '../InnerNavBar/InnerNavBar';
import Title from '../Title/Title';
import styles from './app.module.scss';
import { FaAngleDoubleRight } from 'react-icons/fa';

//API
const url = 'https://course-api.com/react-tabs-project'

function App() {

  //loading and initial value is true
  const [loading, setLoading] = useState(true);
  
  //jobs and initial value is empty array
  const [jobs, setJobs] = useState([]);

  //values and initial value is 0
  const [value, setValue] = useState(0);

  //fetch jobs function
  const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])
  
  // checking if fetching is working
  // console.log(jobs);

  if (loading) {
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
              <div>
                <Title dark={true} title={'Tabs Experiences'} />
                <article className='jobInfo'>
                    <section className='loading'>
                      <h1>Loading...</h1>
                    </section> 
                </article>
              </div>
            }
          </div>
        </Banner>
      </SimpleHero>
    );
  }

  // destructuring and getting first job
  const {company, dates, duties, title} = jobs[value];

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
          <div>
            <Title dark={true} title={'Tabs Experiences'} />
            <article className={styles.jobInfo}>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className={styles.jobDate}>{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className={styles.jobDesc}> 
                    <FaAngleDoubleRight className={styles.jobIcon} />
                    <p>{duty}</p>
                  </div>
                )
              })}
            </article>
          </div>
        </div>
      </Banner>
    </SimpleHero>
  );
}

export default App;
