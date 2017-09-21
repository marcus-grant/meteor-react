import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';

import TitleBar from '../imports/ui/TitleBar'
import AddPlayer from '../imports/ui/AddPlayer'


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
           $: {score: 1}
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

    let jsx = (
      <div>
        <TitleBar title="Score Keep"/>
        {/* Render AddPlayer Component */}
        {/*
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button>Add Player</button>
        </form>
        */}
        <AddPlayer/>
        {renderPlayers(players)}
      </div>
    )
    ReactDOM.render(jsx, document.getElementById('react-root'));
  })
});
