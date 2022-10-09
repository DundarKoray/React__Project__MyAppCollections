import { Component } from 'react';

class BoxGenerator extends Component {
    render() {
        return (
            <div>
            <div style={{
                height: `${this.props.height}em`,
                width: `${this.props.width}em`,
                backgroundColor: this.props.color
            }}>
            <button onClick={this.props.removeBox}>Remove The Box</button>
            </div>
            </div>
        );
    }
}

export default BoxGenerator;