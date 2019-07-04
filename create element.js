import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Segun', 'Matt', 'Seun', 'Chioma'];

let listOfPeople;

//create element is an alternative for writing a JSX element. JSX calls create element in the background
listOfPeople = people.map((person, i) => React.createElement(
"li", //tag
"key=person_1" + i.toString(), //attribute
person  )); //content

ReactDOM.render(<ul>{listOfPeople}</ul>, document.getElementById('app'));
