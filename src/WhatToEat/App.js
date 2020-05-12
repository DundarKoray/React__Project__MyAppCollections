import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import WhatToEat from './WhatToEat';


const App = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                    <WhatToEat />
                </Banner>    
            </SimpleHero>            
        </div>
    );
};

export default App;            