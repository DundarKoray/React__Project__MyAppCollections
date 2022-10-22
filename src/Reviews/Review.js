import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import styles from './review.module.scss'


const Review = () => {
  console.log(people);

  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return newIndex;
    })
  }

  const previousReview = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return newIndex;
    })
  }

  return (
    <div className={styles.review}>
      <img src={image} className={styles.image} alt={name}/>
      <h2 className='name'>{name}</h2>
      <h6 className='occupation'>{job}</h6>
      <p className={styles.text}>{text}</p>
      <div className={styles.buttons}>
        <a onClick={() => previousReview()}><FaChevronLeft className={styles.previous} /></a>
        <a onClick={() => nextReview()}><FaChevronRight className={styles.next} /></a>
      </div>
      <button className='btn-primary'>Get a random review</button>
    </div>
  )
};

export default Review;
