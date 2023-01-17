import React, { useEffect, useState } from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import InnerNavBar from '../InnerNavBar/InnerNavBar';
import Title from '../Title/Title';

function App() {
  
  return (  
    <SimpleHero>
      <Banner>
        <InnerNavBar />
        <div className="goals">
          Goals
          <br />1: 
          <br />2: 
          <br />3: 
        </div>
        <div>
            <Title dark={true} title={'Slider: Reviews'} />
            
        </div>
      </Banner>
    </SimpleHero>
  );
}

export default App;
