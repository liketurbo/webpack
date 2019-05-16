import React from 'react';
import ReactDOM from 'react-dom';

const SSR = () => <div onClick={() => alert('hello')}>Hello world</div>;

// Render only in the browser, export otherwise
if (typeof document === 'undefined') {
  module.exports = SSR;
} else {
  ReactDOM.render(<SSR />, document.getElementById('root'));
}
