import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './home_page/home_page';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';
import pet_index_container from './pets/pet_index_container';
import '../styles/index.css'
import ProfileContainer from './User/profile_container';
import EditProfileContainer from './User/edit_profile_container';
import NavBarContainer from './nav/navbar_container';
import pet_show_container from './pets/pet_show_container';
import search_container from './search/search_container';
import search_results_container from './search/search_results_container';


const App = () => (

  <div className='full-page'>
    <NavBarContainer/>
    <Switch>
      <ProtectedRoute exact path='/pets/:petId' component={pet_show_container} />
      <ProtectedRoute exact path='/pets' component={pet_index_container} />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/search' component={search_container} />
      <Route exact path='/search-results' component={search_results_container} />


      {/* <AuthRoute exact path='/login' component={LoginFormContainer} /> */}
      {/* <AuthRoute exact path='/signup' component={SignupFormContainer} /> */}
      <ProtectedRoute exact path='/users/:id' component={ProfileContainer} />
      <ProtectedRoute exact path='/users/:id/edit' component={EditProfileContainer} />
      <ProtectedRoute exact path='/users/:id/:petId' component={pet_show_container} />
    </Switch>
  </div>
)

export default App;
