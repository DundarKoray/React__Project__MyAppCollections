import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import Deck from './Deck';



const App = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                    <Deck />
                </Banner>    
            </SimpleHero>            
        </div>
    );
};

export default App;            