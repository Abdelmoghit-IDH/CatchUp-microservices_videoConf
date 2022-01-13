import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ForgotPassword from "./views/ForgotPassword";
import Landing from "./views/Landing";
import Login from "./views/Login";
import Register from "./views/Register";

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
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
