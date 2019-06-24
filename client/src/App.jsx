import React, { Component } from 'react';
import RouterComponent from './components/RouterComponent';
import querystring from 'query-string';

import './App.css';
import './sass-styles/grid-template.sass';

const parsedAccessToken = querystring.parse(window.location.search);
const accessToken = parsedAccessToken.access_token;

class App extends Component {
  render() {
    if (accessToken) {
      return (
        <div>
          <RouterComponent />
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="centered">
            {' '}
            <button
              className="signIn"
              onClick={() => (window.location = 'http://localhost:8000/login')}
            >
              Sign In with Spotify
            </button>
          </div>
        </div>
      );
    }
  }
}

export default App;
