import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, ResetPassword, Start, Home, SignUp } from './pages';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="restorePassword" component={ResetPassword} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/restorePassword" component={ResetPassword} />
      </Switch>
    </div>
  );
}

export default App;
