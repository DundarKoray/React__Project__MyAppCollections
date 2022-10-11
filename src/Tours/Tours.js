import Tour from './Tour';
import styles from './tours.module.css'

const Tours = ({tours}) => {
  // console.log(props.tours)
  // console.log(tours)

  return (
    <section className={styles.tours}>
      <div className='title'>
        <h2>Our tours</h2>
        <div className='underline'></div>
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
