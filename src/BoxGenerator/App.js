import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';

import BoxGeneratorList from './BoxGeneratorList'

const BoxGeneratorContainer = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                    <BoxGeneratorList />
                </Banner>
            </SimpleHero>
        </div>
    );
};

export default BoxGeneratorContainer;