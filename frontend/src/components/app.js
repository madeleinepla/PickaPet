import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './home_page/home_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <AuthRoute exact path='/login' compoent={LoginFormContainer} />
    <AuthRoute exact path='/signup' compoent={SignupFormContainer} />
  </Switch>
)

export default App;