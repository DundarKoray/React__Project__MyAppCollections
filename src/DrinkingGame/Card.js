import React, { Component } from 'react';
import styles from './card.module.css';

class Card extends Component {
    render() {
        return (
            <img className={styles.card} src={this.props.image} alt={this.props.name} />
        );
    }
}

export default Card;