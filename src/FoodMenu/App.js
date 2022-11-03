import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import InnerNavBar from '../InnerNavBar/InnerNavBar';
import Title from '../Title/Title';

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState();
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
        <Title title={'Our Menu'} />
        <Categories />
        <Menu items={menuItems} />
      </Banner>
    </SimpleHero>
  );
}

export default App;
