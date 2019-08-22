import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// document.body.appendChild(component());

// function component() {
//   const element = document.createElement('div');

//   // need Lodash for the following line
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

ReactDOM.render(<App />, document.getElementById('app'));
