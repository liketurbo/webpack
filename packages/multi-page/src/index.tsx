import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';

const App = () => (
  <Fragment>
    <Helmet title="You Are Doing Great" />
    <h2>Welcome to React</h2>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </Fragment>
);

ReactDOM.render(<App />, document.body);
