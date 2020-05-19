import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import ToDo from './ToDo';

const App = () => {
    return (
        <SimpleHero >
            <Banner>
                <ToDo/>
            </Banner>
        </SimpleHero>
    );
};

export default App;