import React from 'react';
import styles from './menu.module.scss';

const Menu = ({items}) => {
  // console.log(props);
  // console.log(items);
  return (
    <div className={styles.menuList}>
      {items.map(item => {
        let {id, title, img, desc, price} = item;
        return ( 
          <div class={styles.menuItem} key={id}>
            <img src={img} alt={title} />
            <div>
              <div className={styles.titleAndPrice}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.price}>{price}</div>
              </div>
              <div className={styles.description}>{desc}</div>
            </div>
          </div>
        )
      })}
    </div>
  ) 
};

export default Menu;
