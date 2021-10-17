import MainPage from './components/page/MainPage';

import CommunicatePage from './components/page/CommunicatePage';
import CommunicateWritePage from './components/page/CommunicateWritePage';
import CommunicatePostPage from './components/page/CommunicatePostPage';

import FreePage from './components/page/FreePage';
import FreeWritePage from './components/page/FreeWritePage';
import FreePostPage from './components/page/FreePostPage';

import DebatePage from './components/page/DebatePage';
import DebateWritePage from './components/page/DebateWritePage';
import DebatePostPage from './components/page/DebatePostPage';

import LetterPage from './components/page/LetterPage';
import LetterWritePage from './components/page/LetterWritePage';
import LetterPostPage from './components/page/LetterPostPage';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { signIn } from './components/auth';
import LoginPage from './components/page/LoginPage';
import SignupPage from './components/page/SignupPage';

const App = () => {

  const login = ({userId, password}) => signIn({ userId, password });

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

          <Route exact path="/debate" component={DebatePage} />
          <Route exact path="/debate-write" component={DebateWritePage} />
          <Route exact path="/debate-post" component={DebatePostPage} />

          <Route exact path="/letter" component={LetterPage} />
          <Route exact path="/letter-write" component={LetterWritePage} />
          <Route exact path="/letter-post" component={LetterPostPage} />

          </> 
          : 
          <>
      
          {/* <Redirect path="/" to="/login"/> */}
          <Route exact path="/login" 
                 render={() => <LoginPage 
                                login={login}
                                />}/>
          <Route exact path="/signup" 
                 render={() => <SignupPage />}/>                         
          </>
           }
        </Switch>
    </Router>
  )
}

export default App
