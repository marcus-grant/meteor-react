import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';

const renderPlayers= (playerList) => {
  return playerList.map(function (player) {
    return (
     <p key={player._id}>
       {player.name} has {player.score} point(s)!
       <button onClick={ () => {
         Players.update({_id: player._id}, {
           $inc: {score: 1}
         });
       }}>+1</button>
       <button onClick={ () => {
         Players.update({_id: player._id}, {
           $inc: {score: -1}
         });
       }}>-1</button>
       <button onClick={() => Players.remove({_id: player._id})}>X</button>
     </p>
    )
  });
};

const handleSubmit = (e) => {
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

Meteor.startup(() => {
  // Create a players list 'players' by fetching from datastore
  players = Players.find().fetch();
  Tracker.autorun(() => {
    // Update players on datastore updates
    players = Players.find().fetch();

  // Moving this inside of the autorun, ensures that rendering occurs on update
    title = "Score Kepp";
    name = "Marcus"
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is my second p.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button>Add Player</button>
        </form>
        {renderPlayers(players)}
      </div>
    )
    ReactDOM.render(jsx, document.getElementById('react-root'));
  })
  // insert new doc into players collection
  //    exactly the same as in on server

});
