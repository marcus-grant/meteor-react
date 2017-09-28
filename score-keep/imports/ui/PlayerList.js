import React from 'react';

import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers= (playerList) => {
    if (this.props.players.length === 0) {
      // return some jsx if empty
      return (
        <div>
          <h3>No Score to track...</h3>
          <p>Please add some players to track their scores.</p>
        </div>
      );
    } else {
    return this.props.players.map((player) => {
     return <Player key={player._id} player={player} />;
    });
    }
  }

  render() {
    return (
      <div>
        {this.renderPlayers()} 
      </div>
    );
  }
}
