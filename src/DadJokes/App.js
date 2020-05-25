import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import JokeList from './JokeList';


const App = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                    <JokeList />
                </Banner>    
            </SimpleHero>            
        </div>
    );
};

export default App;            