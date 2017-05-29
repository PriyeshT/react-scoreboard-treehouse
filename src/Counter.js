import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score: this.props.initialScore
    };
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement">-</button>
        <div className="counter-score"> {this.state.score} </div>
        <button className="counter-action increment">+</button>
      </div>
    );
  }
}

Counter.propTypes = {
  initialScore: PropTypes.number.isRequired
}

export default Counter;