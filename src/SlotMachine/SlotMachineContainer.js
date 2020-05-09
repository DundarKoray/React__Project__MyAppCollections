import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import SlotMachine from './SlotMachine';
import { Link } from 'react-router-dom';
import "./slotMachine.css";

const SlotMachineContainer = () => {
    return (
        <div>
            <SimpleHero>
            <Link to="/" className="btn-white btn-return">Return Home</Link>
                <Banner>
                    <SlotMachine/>
                </Banner>    
            </SimpleHero>            
        </div>
    );
};

export default SlotMachineContainer;            