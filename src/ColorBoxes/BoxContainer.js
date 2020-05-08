 import React, { Component } from 'react'
 import { Link } from 'react-router-dom'
 import Box from './Box'
 import './BoxContainer.css'
import SimpleHero from '../SimpleHero/SimpleHero'
import Banner from '../Banner/Banner'
 class BoxContainer extends Component {
    static defaultProps = {
      numBoxes: 9,
      allColors: ['purple', 'magenta', 'violet', 'pink', 'yellow', 'green', 'red', 'blue', 'black', 'orange']
    }
    
    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map( () => <Box colors={this.props.allColors}/>)
        return (
            <SimpleHero>
                <Link to="/" className="btn-white btn-return">Return Home</Link>
                <Banner>

                <h2>Color Boxes</h2>
                <p>Click one of the boxes to change color</p>
            <div className="BoxContainer">
                {boxes}
            </div>
                </Banner>
            </SimpleHero>
        )
    }
 }

 export default BoxContainer