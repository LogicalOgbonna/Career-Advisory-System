import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";

import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Personality from "./components/Personality/Personality";
import Career from "./components/CareerPath/CareerPath";
import UserRoute from "./routes/UserRoute";
import Test from "./components/Personality/Test";

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Switch>
        <Route path="/" exact name="Home" component={Landing} />
        <Route path="/login" exact name="Home" component={Landing} />
        <UserRoute
          path="/dashboard"
          exact
          name="Dashboard"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
        />
        <UserRoute
          path="/personality"
          exact
          name="Personality"
          component={Personality}
          isAuthenticated={isAuthenticated}
        />

        <UserRoute
          path="/career"
          exact
          name="Career"
          component={Career}
          isAuthenticated={isAuthenticated}
        />

        <UserRoute
          path="/test"
          exact
          name="Test"
          component={Test}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

App.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

export default connect(mapStateToProps)(App);
