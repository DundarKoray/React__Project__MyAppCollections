import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import CoinContainer from './CoinContainer';


const SlotMachineContainer = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                    <CoinContainer />
                </Banner>    
            </SimpleHero>            
        </div>
    );
};

export default SlotMachineContainer;            