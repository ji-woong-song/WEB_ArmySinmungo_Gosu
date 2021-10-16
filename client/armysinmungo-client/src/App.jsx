import MainPage from './components/page/MainPage';
import CommunicatePage from './components/page/CommunicatePage';
import CommunicateWritePage from './components/page/CommunicateWritePage';
import CommunicatePostPage from './components/page/CommunicatePostPage';
import HotelPage from './components/page/HotelPage';
import TmoPage from './components/page/TmoPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { signIn } from './components/auth';
import LoginPage from './components/page/LoginPage';
import AuthRoute from './components/AuthRoute';

const App = () => {

  const login = ({userId, password}) => signIn({ userId, password });
  const logout = () => {
    localStorage.removeItem("userName");
  } 

  return (
    <Router>
        <Switch>
          {localStorage.getItem("userName") ? 
          <>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/communicate" component={CommunicatePage} />
          <Route exact path="/communicate-write" component={CommunicateWritePage} />
          <Route exact path="/communicate-post" component={CommunicatePostPage} />
          <Route exact path="/hotel" component={HotelPage} /> 
          <Route exact path="/tmo" component={TmoPage} /> 
          </> 
          : 
          <>
          <Redirect path="/*" to="/login"/>
          <Route exact path="/login" 
                 render={() => <LoginPage 
                                login={login}
                                />}/> 
          </>
           }
			{/*<Route component={NotFound} />*/}
        </Switch>
    </Router>
  )
}

export default App
