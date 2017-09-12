import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function () {
    // Render JSX stuff here...
    let jsx = <p>wuba-luba-dub-dub</p>;
    ReactDOM.render(jsx, document.getElementById('react-root'));
});
