import styles from './categories.module.scss';

const Categories = ({categories, filterItems}) => {
  return (
    <div className={styles['buttonsContainer']}>
      {/* <button onClick={()=>filterItems('all')}>All</button>
      <button onClick={()=>filterItems('breakfast')}>Breakfast</button>
      <button onClick={()=>filterItems('lunch')}>Lunch</button>
      <button onClick={()=>filterItems('shakes')}>Shakes</button> */}

      {categories.map((item, index)=> {
        return(
          <button 
            onClick={()=>filterItems(item)} 
            key={index} 
            active={styles['active']}
          >
            {item}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;
