import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Router } from "react-router-dom";
import Top from './components/top/top'
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Top />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);
