import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import InnerNavBar from '../InnerNavBar/InnerNavBar';
import Title from '../Title/Title';
import styles from './app.module.scss';

const allCategories = ['all', ...new Set(items.map((item)=> {
  return item.category;
}))]

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  // This function filters menu when click category buttons
  const filterItems = (category) => {
    let newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems);
    if(category === 'all'){
      setMenuItems(items);
    }
  }

  return (  
    <SimpleHero>
      <Banner>
        <InnerNavBar />
        <div className="goals">
          Goals
          <br />1: Fetch the data from local JSON API and list all the foods.
          <br />2: Add button 'All' manually which shows all the dishes, and generate buttons type of the dishes from JSON API, remove duplicate buttons.
          <br />3: When you click buttons, render correct dishes.
        </div>
        <div className={styles.app}>
          <Title dark={true} title={'Our Menu'} />
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </div>
      </Banner>
    </SimpleHero>
  );
}

export default App;
