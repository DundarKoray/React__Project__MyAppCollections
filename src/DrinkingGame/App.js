import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import DrinkingGame from './DrinkingGame';



const App = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                    <DrinkingGame />
                </Banner>    
            </SimpleHero>            
        </div>
    );
};

export default App;            