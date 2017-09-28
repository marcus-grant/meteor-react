import React from 'react';

import {Players} from './../api/players';


export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;

    e.preventDefault();

    if (playerName) { //validate against empty strings
      e.target.playerName.value = '';
      //players insertion with a new score of '0'
     Players.insert({
       name: playerName,
       score: 0
     });
     console.log(Players.find().fetch());
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button>Add Player</button>
        </form>
      </div>
    );
  }
}


