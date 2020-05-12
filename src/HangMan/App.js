import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import Hangman from './Hangman';



const App = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                    <Hangman/>
                </Banner>    
            </SimpleHero>            
        </div>
    );
};

export default App;            