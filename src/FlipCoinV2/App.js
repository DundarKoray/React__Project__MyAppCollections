import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import FlipCoinV2 from './FlipCoinV2';


const App = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                    <FlipCoinV2/>
                </Banner>    
            </SimpleHero>            
        </div>
    );
};

export default App;            