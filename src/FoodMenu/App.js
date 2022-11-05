import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import InnerNavBar from '../InnerNavBar/InnerNavBar';
import Title from '../Title/Title';

import styles from './app.module.scss';

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState();

  const filterItems = (category) => {
    let newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems);
  }

  return (  
    <SimpleHero>
      <Banner>
        <InnerNavBar />
        <div className="goals">
          Goals
          <br />1: Fetch the data from local JSON API and list only one review at a time.
          <br />2: Add buttons by using React Icons for showing previous and next review.
          <br />3: Add a random button which shows a random review when clicking it.
        </div>
        <div className={styles.app}>
          <Title dark={true} title={'Our Menu'} />
          <Categories filterItems={filterItems} />
          <Menu items={menuItems} />
        </div>
      </Banner>
    </SimpleHero>
  );
}

export default App;
