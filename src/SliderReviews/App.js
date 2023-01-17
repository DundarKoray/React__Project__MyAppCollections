import React, { useEffect, useState } from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import InnerNavBar from '../InnerNavBar/InnerNavBar';
import Title from '../Title/Title';
import data from './data';
import styles from './app.module.scss';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

function App() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);
  
    return (  
    <SimpleHero>
        <Banner>
        <InnerNavBar />
        <div className="goals">
            Goals
            <br />1: Fetch the data from data.js in project folder.
            <br />2: 
            <br />3: 
        </div>
        <div className={styles.app}>
            <Title dark={true} title={'Slider: Reviews'} />
            <section className={styles.sectionCenter}>
                {people.map((person, index) => {
                    const { id, image, name, title, quote } = person;
                    
                    return (
                        <article key={id}>
                            <img key={id} src={image} alt={name} className={styles.personImage} />
                            <h4 className={styles.name}>{name}</h4>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.text}>{quote}</p>
                            <FaQuoteRight className={styles.quoteIcon} />
                        </article>
                    )
                })}
                <button className={styles.prevButton}><FiChevronLeft /></button>
                <button className={styles.nextButton}><FiChevronRight/></button>
            </section>  
        </div>
        </Banner>
    </SimpleHero>
    );
}

export default App;
