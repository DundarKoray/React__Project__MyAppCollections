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

    useEffect(() => {
        // gets the last item in people array
        let lastIndex = people.length - 1;
        
        if(index < 0) {
            setIndex(lastIndex);
        }

        if(index > lastIndex) {
            setIndex(0);
        }
 
    },[index, people])


    //autoplay 
    useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);

        return () => {
          clearInterval(slider);
        };
    }, [index]);
  
    return (  
    <SimpleHero>
        <Banner>
        <InnerNavBar />
        <div className="goals">
            Goals
            <br />1: Fetch the data from data.js in project folder.
            <br />2: Make a slider with buttons
            <br />3: Make autoplay feature so the slides changes every 5 seconds
        </div>
        <div className={styles.app}>
            <Title dark={true} title={'Slider: Reviews'} />
            <section className={styles.sectionCenter}>
                {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;
                    
                    let position = styles.nextSlide;
                    if(personIndex === index){
                        position = styles.activeSlide;
                    }
                    // this logic place the last item in array to the left side of the screen,
                    // so when the index is 0 and when personIndex is equal to the last item in array
                    if(personIndex === index -1 || ((index === 0 && personIndex === people.length -1))) {
                        position = styles.prevSlide;
                    }

                    return (
                        <article key={id} className={position}>
                            <img key={id} src={image} alt={name} className={styles.personImage} />
                            <h4 className={styles.name}>{name}</h4>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.text}>{quote}</p>
                            <FaQuoteRight className={styles.quoteIcon} />
                        </article>
                    )
                })}
                <button className={styles.prevButton} onClick={()=> setIndex(index - 1)}><FiChevronLeft /></button>
                <button className={styles.nextButton} onClick={()=> setIndex(index + 1)}><FiChevronRight/></button>
            </section>  
        </div>
        </Banner>
    </SimpleHero>
    );
}

export default App;
