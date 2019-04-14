import React, { Component } from 'react';
import Loadable from 'react-loadable';

import Loading from './Loading';

const LoadableComponent = Loadable({
  loader: async () => {
    await new Promise(res => {
      setTimeout(() => res(), 5000);
    });

    return import('./Async');
  },
  loading: Loading
});

export default class App extends Component {
  render() {
    return <LoadableComponent />;
  }
}
