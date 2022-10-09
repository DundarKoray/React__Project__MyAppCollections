import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import WhatToEatV2 from './WhatToEatV2';


const App = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                    <WhatToEatV2 />
                </Banner>    
            </SimpleHero>            
        </div>
    );
};

export default App;            