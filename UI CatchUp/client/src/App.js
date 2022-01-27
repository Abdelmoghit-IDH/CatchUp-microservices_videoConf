import React from "react";
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ForgotPassword from "./views/ForgotPassword";
import Landing from "./views/Landing";
import Login from "./views/Login";
import Register from "./views/Register";
import Main from './components/videoConference/Main/Main';
import Room from './components/videoConference/Room/Room';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Landing {...props} />}
        />
        <Route
          path="/login-page"
          exact
          render={(props) => <Login {...props} />}
        />
        <Route
          path="/register-page"
          exact
          render={(props) => <Register {...props} />}
        />
        <Route
          path="/forgot-password"
          exact
          render={(props) => <ForgotPassword {...props} />}
        />
        <AppContainer>
          <Route 
            exact 
            path="/video-conference" 
            component={Main} 
          />
          <Route 
            exact 
            path="/room/:roomId" 
            component={Room} 
          />
        </AppContainer>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: white;
  background-color: #454552;
  text-align: center;
`;

export default App;
