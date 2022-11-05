import styles from './categories.module.scss';

const Categories = ({filterItems}) => {
  return (
    <div className={styles.buttonsContainer}>
      <button>All</button>
      <button onClick={()=>filterItems}>Breakfast</button>
      <button>Lunch</button>
      <button>Shakes</button>
    </div>
  );
};

export default Categories;
