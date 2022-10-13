import Tour from './Tour';
import styles from './tours.module.scss'

const Tours = ({tours}) => {
  // console.log(props.tours)
  // console.log(tours)

  return (
    <section className={styles.tours}>
      <div className={styles.title}>
        <h1>Our tours at the moment</h1>
        <div className={styles.underline}></div>
      </div>
      <div>
        {tours.map((tour) => {
          console.log(tour);
          return <Tour key={tour.id} {...tour}></Tour>
        })}
      </div>
    </section>
  )
};

export default Tours;
