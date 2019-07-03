import React from 'react';
import ReactDOM from 'react-dom';

let gender;
function pickAStruggle() {
  if (Math.random() < .5){return 'girl'}
                          else{return 'boy'};
}

gender = pickAStruggle();
//inject JS into JSX element with curly braces and use tenary op for conditional
const body = (
	<body>
    <p>Well....</p>
		{gender === 'girl' ? <p>Hello Miss</p> : <p>Hello Sir</p>} 
	</body>
);

ReactDOM.render(body, document.getElementById('app'));
