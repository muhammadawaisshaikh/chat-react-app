import React from 'react';
import './App.css';

import Home from './app/components/Home';
import About from './app/components/About';
import Chat from './app/components/Chat';

import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Route exact path="/" component={ Home }/>
        <Switch>
          <Route exact path="/about" component={ About }/>
          <Route exact path="/chat" component={ Chat }/>
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
