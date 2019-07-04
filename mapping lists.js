import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Segun', 'Matt', 'Seun', 'Chioma'];

let listOfPeople;

listOfPeople = people.map(person => <li>{person}</li>);

//add key so react doesnt scramble lists order
listOfPeopleWithKey = people.map((person, i) => <li key={'person_'+i}>{person}</li>);

ReactDOM.render(<ul>{listOfPeople}</ul>, document.getElementById('app'));
