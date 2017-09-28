import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  // Create a players list 'players' by fetching from datastore
  players = Players.find().fetch();
  Tracker.autorun(() => {
    // Update players on datastore updates
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let title = 'Score Keep';

    ReactDOM.render(<App title={title} players={players}/>, document.getElementById('react-root'));
  })
});
