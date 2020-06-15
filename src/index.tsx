import * as React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import {AppStateProvider} from "./AppStateContext";

render(
  <AppStateProvider>
    <App />
  </AppStateProvider>,
  document.getElementById('root')
);
