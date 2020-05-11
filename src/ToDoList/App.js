import React from 'react';
import SimpleHero from '../SimpleHero/SimpleHero';
import Banner from '../Banner/Banner';
import ToDoList from './ToDoList';
import { Link } from 'react-router-dom';

const ToDoListContainer = () => {
    return (
        <SimpleHero >
            <Banner>
                <ToDoList/>
            </Banner>
        </SimpleHero>
    );
};

export default ToDoListContainer;