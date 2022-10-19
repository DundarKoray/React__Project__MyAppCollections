import SimpleHero from "../SimpleHero/SimpleHero";
import Banner from "../Banner/Banner";
import { useState, useEffect } from 'react'
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import styles from './app.module.scss';
import Review from './Review';
function App() {
  return (
    <div>
        <SimpleHero>
            <Banner>
                <InnerNavBar />
                <div className={styles.goals}>
                    Goals
                    <br />1: Fetch the data from JSON API and list all reviews inside a custom slider.
                    <br />2: Add a button for swapping slider.
                </div>
            </Banner>    
        </SimpleHero>            
    </div>
);
}

export default App;
