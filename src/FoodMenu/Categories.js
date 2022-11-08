import styles from './categories.module.scss';

const Categories = ({filterItems}) => {
  return (
    <div className={styles.buttonsContainer}>
      <button onClick={()=>filterItems('all')}>All</button>
      <button onClick={()=>filterItems('breakfast')}>Breakfast</button>
      <button onClick={()=>filterItems('lunch')}>Lunch</button>
      <button onClick={()=>filterItems('shakes')}>Shakes</button>
    </div>
  );
};

export default Categories;
