import MainPage from './components/page/MainPage';

import CommunicatePage from './components/page/CommunicatePage';
import CommunicateWritePage from './components/page/CommunicateWritePage';
import CommunicatePostPage from './components/page/CommunicatePostPage';

import FreePage from './components/page/FreePage';
import FreeWritePage from './components/page/FreeWritePage';
import FreePostPage from './components/page/FreePostPage';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { signIn } from './components/auth';
import LoginPage from './components/page/LoginPage';


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

          <Route exact path="/free" component={FreePage} />
          <Route exact path="/free-write" component={FreeWritePage} />
          <Route exact path="/free-post" component={FreePostPage} />

          

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
