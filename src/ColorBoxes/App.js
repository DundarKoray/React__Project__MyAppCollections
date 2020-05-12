import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import BoxContainer from './BoxContainer';

const ToDoListContainer = () => {
    return (
        <SimpleHero >
            <Banner>
                <BoxContainer/>
            </Banner>
        </SimpleHero>
    );
};

export default ToDoListContainer;