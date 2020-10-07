import React from 'react';
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/UserDashboard';
import GroupDashboard from './pages/GroupDashboard';
import SocialTodoGroups from './pages/SocialTodoGroups';
// import Two from './components/Two';
// import Three from './components/Three';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          {/* <Route path="/home" exact component={HomePage}/> */}
          <Route path="/userdashboard" exact component={UserDashboard}/>
          <Route path="/socialtodogroups" exact component={SocialTodoGroups}/>
          <Route path="/groupdashboard" exact component={GroupDashboard}/>
          {/* <Route path="/1" exact component={One}/>
          <Route path="/2" exact component={Two}/>     
          <Route path="/3" exact component={Three}/> */}
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
