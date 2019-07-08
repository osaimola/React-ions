import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  // always use parentheses when declaring multiline JSX elements
  render () {
    return (<blockquote>
        <p> What is important now is to recover our senses.</p>
        <cite>
        <a target="_blank" 
      href="https://en.wikipedia.org/wiki/Susan_Sontag">
      Susan Sontag
    </a>
        </cite>
        </blockquote>);
  }
}

ReactDOM.render(<MyComponentClass />,
                document.getElementById('app')
);
