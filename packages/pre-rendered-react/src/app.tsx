import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './components/container';
import Nav from './components/nav';
import NavLink from './components/nav-link';
import Title from './components/title';
import About from './views/about';
import Home from './views/home';
import NoMatch from './views/no-match';

const title = 'You Are Doing Great';
const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true
  },
  {
    title: 'About',
    path: '/about',
    component: About,
    exact: false
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Helmet titleTemplate={`%s - ${title}`} />
          <Title>YADG</Title>
          <Nav>
            <h1>Navigation</h1>
            {routes.map((route, i) => (
              <NavLink key={i} {...route} />
            ))}
          </Nav>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
