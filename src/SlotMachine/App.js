import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import SlotMachine from './SlotMachine';


const SlotMachineContainer = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                    <SlotMachine/>
                </Banner>    
            </SimpleHero>            
        </div>
    );
};

export default SlotMachineContainer;            