import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './home_page/home_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import pet_index_container from './pets/pet_index_container';
import '../styles/index.css'
import ProfileContainer from './User/profile_container';
import NavBarContainer from './nav/navbar_container';

const App = () => (

  <div>
    <NavBarContainer/>
    <Switch>
      <Route exact path='/api/pets' component={pet_index_container} />
      <Route exact path='/' component={HomePage} />
      <AuthRoute exact path='/login' compoent={LoginFormContainer} />
      <AuthRoute exact path='/signup' compoent={SignupFormContainer} />
      <ProtectedRoute exact path='/users/:id' component={ProfileContainer} />
    </Switch>
  </div>
)

export default App;
