import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import './App.css';
import config from './app.config';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import AddPage  from './pages/AddPage'
import ManagePage from './pages/ManagePage'
import SettingsPage from './pages/SettingsPage'
import Navi from './components/Navi'
import Signup from './components/Signup'

function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Navi />
          {/* <img class="loadingImg fadeOut spin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png" /> */}
            <Switch>
              <Security issuer={config.issuer}
                    client_id={config.client_id}
                    redirect_uri={window.location.origin + '/implicit/callback'}
                    onAuthRequired={onAuthRequired} >
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" render={() => <LoginPage baseUrl={config.url} />}/>
                <Route exact path="/signup" component={Signup} />
                <SecureRoute exact path="/browse" component={BrowsePage} />
                <SecureRoute exact path="/add" component={AddPage} />
                <SecureRoute exact path="/manage" component={ManagePage} />              
                <SecureRoute exact path="/settings" component={SettingsPage} />
                <Route exact path="/implicit/callback" component={ImplicitCallback} />
                {/* <Route component={HomePage} /> */}
              </Security>
            </Switch>
          </div>
        </Router>
      </div>
      );
  }
}

export default App;
