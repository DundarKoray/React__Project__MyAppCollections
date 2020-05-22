import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import DadJokes from './DadJokes';


const App = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                    <DadJokes />
                </Banner>    
            </SimpleHero>            
        </div>
    );
};

export default App;            