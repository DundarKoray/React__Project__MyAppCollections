import SimpleHero from "../SimpleHero/SimpleHero";
import Banner from "../Banner/Banner";
import { useState, useEffect } from 'react'
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import styles from './app.module.scss';
import Review from './Review';
import Title from '../Title/Title';

function App() {

    return (
        <div>
            <SimpleHero>
                <Banner>
                    <InnerNavBar />
                    <div className={styles.goals}>
                        Goals
                        <br />1: Fetch the data from local JSON API and list only one review at a time.
                        <br />2: Add buttons by using React Icons for showing previous and next review.
                        <br />2: Add a button which shows a random button.
                    </div>
                    <main> 
                        <Title title={'Our Reviews'} />
                        <Review />
                    </main>
                </Banner>    
            </SimpleHero>            
        </div>
    );
}

export default App;
