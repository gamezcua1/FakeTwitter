import React from 'react';
import { Router } from "@reach/router";

import App from './App';
import VistaTweet from './VistaTweet';

const Routes = () => (
  <Router>
    <App path='/'/>
    <VistaTweet path='/tweet/:tweetId' />
  </Router>
)

export default Routes;