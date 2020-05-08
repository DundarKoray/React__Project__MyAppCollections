import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import BoxGeneratorList from './BoxGeneratorList'

const BoxGeneratorContainer = () => {
    return (
        <div>
            <SimpleHero>
                <Banner>
                <Link to="/" className="btn-white btn-return">Return Home</Link>
                <BoxGeneratorList />
                </Banner>
            </SimpleHero>
        </div>
    );
};

export default BoxGeneratorContainer;