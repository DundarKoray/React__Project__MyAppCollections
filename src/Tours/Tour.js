import { useState } from 'react';
import styles from './tour.module.scss'

const Tour = ({id, image, info, price, name}) => {

  return (
    <article className={styles.tour} key={id}>
      <img src={image} alt={name} />
      <div className={styles.bottom}>
        <div className={styles.tourInfo}>
          <h4>{name}</h4>
          <h4 className={styles.tourPrice}>€{price}</h4>
        </div>
        <p>{info}</p>
        <button className='btn-primary'>Not interested</button>
      </div>

    </article>
  )
};

export default Tour;
