import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import ToDoList from './ToDoList';

const App = () => {
    return (
        <SimpleHero >
            <Banner>
                <ToDoList/>
            </Banner>
        </SimpleHero>
    );
};

export default App;