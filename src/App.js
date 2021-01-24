import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home/HomePage';
import AdminPage from './pages/auth/AdminPage';
import LoginPage from './pages/auth/LoginPage';
import RegPage from './pages/auth/RegPage';
import UserPage from './pages/user/UserPage';
import ChangePassword from './pages/user/ChangePassword';
import ChangeProfile from './pages/user/ChangeProfile';
import ChangePIN from './pages/user/ChangePIN';
import AssignPage from './pages/events/AssignPage';
import EventsPage from './pages/events/EventsPage';
import EventNew from './pages/events/EventNew';
import EventPage from './pages/events/EventPage';
import EventChangeTitle from './pages/events/EventChangeTitle';
import EventChangeDates from './pages/events/EventChangeDates';
import DocsPage from './pages/documents/DocsPage';
import DocNew from './pages/documents/DocNew';
import DocPage from './pages/documents/DocPage';

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <div className='header-brand'>
              <Link to='/'>Start</Link>
            </div>            
          </header>
          <main className="all">

            <Switch>
              <Route exact path="/" component={HomePage}/>

              <Route path="/admin" component={AdminPage}/>
              <Route path="/login" component={LoginPage}/>
              <Route path='/registration' component={RegPage} />

              <Route exact path='/user' component={UserPage} />
              <Route exact path='/user/changePassword' component={ChangePassword} />
              <Route exact path='/user/changeProfile' component={ChangeProfile} />
              <Route exact path='/user/changePIN' component={ChangePIN} />

              <Route path='/assign' component={AssignPage} />
              <Route exact path='/events' component={EventsPage} />
              <Route path='/events/eventnew' component={EventNew} />
              <Route path='/events/event' component={EventPage} />
              <Route path='/events/changeTitle' component={EventChangeTitle} />
              <Route path='/events/changeDates' component={EventChangeDates} />

              <Route exact path='/docs' component={DocsPage} />
              <Route path='/docs/docnew' component={DocNew} />
              <Route path='/docs/docpage' component={DocPage} />

              <Redirect to='/' />
            </Switch>

          </main>
        </div>
      );
    }
}

export default App;
