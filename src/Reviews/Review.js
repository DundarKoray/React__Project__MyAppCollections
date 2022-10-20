import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import styles from './review.module.scss'
const Review = () => {
  return (
    <div className={styles.review}>
      <img className='image'/>
      <h2 className='name'>Susan Smith</h2>
      <h3 className='occupation'>Web Developer</h3>
      <p className='text'>I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry</p>
      <a>Arrow Left</a>
      <a>Arrow Right</a>
      <button className='btn-primary'>Get a random review</button>
    </div>
  )
};

export default Review;
