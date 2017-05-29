import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <div className="player-name">
          {this.props.name}
        </div>
        <div className="player-score">
          <Counter/>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

export default Player;