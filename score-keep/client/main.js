import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
  _id: '1',
  name: 'Lauren',
  score: 99
}, {
  _id: '2',
  name: 'Cory',
  score: -1
}, {
  _id: '3',
  name: 'Andrew',
  score: -12
}];

const renderPlayers= function (playerList) {
  return playerList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} points!</p>;
  });
};

Meteor.startup(function () {
    // Render JSX stuff here...
    let name = 'Mike';
    let title = 'Account Settings';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is my second p.</p>
        {renderPlayers(players)}
      </div>
    )
    ReactDOM.render(jsx, document.getElementById('react-root'));
});
