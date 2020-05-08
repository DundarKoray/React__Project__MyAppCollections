import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';

const BoxGenerator = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                    hello
                </Banner>
            </SimpleHero>
        </div>
    );
};

export default BoxGenerator;