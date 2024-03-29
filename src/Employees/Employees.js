import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import styles from './employees.module.scss'


const Review = () => {
  console.log(people);
  console.log(people.length);

  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return numberCheck(newIndex);
    })
  }

  const previousReview = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return numberCheck(newIndex);
    })
  }

  const numberCheck = (number) => {
    if (number < 0) {
      return people.length - 1;
    } 
    else if (number > people.length - 1) {
      return 0;
    }
    return number;
  }

  const randomPerson = () => {
    let range = people.length;
    let randomNumber = Math.floor(Math.random() * range);
    if(randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(numberCheck(randomNumber));
  }

  return (
    <div className={styles.review}>
      <div className={styles.imgContainer}>
        <img src={image} className={styles.image} alt={name}/>
        <div className={styles.quoteContainer}>
          <FaQuoteRight className={styles.quoteIcon} />
        </div>
      </div>
      <h2 className='name'>{name}</h2>
      <h6 className='occupation'>{job}</h6>
      <p className={styles.text}>{text}</p>
      <div className={styles.buttons}>
        <a onClick={() => previousReview()}><FaChevronLeft className={styles.previous} /></a>
        <a onClick={() => nextReview()}><FaChevronRight className={styles.next} /></a>
      </div>
      <button className='btn-primary' onClick={() => randomPerson()}>Get a random review</button>
    </div>
  )
};

export default Review;
