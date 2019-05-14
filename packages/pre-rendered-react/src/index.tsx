import React from 'react';
// @ts-ignore
import { render } from 'react-snapshot';

import App from './app';

const rootEl = document.getElementById('root');
render(<App />, rootEl);
