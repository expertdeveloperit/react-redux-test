import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Single from "./components/pages/Single";
import { Provider } from "react-redux";
import configureStore from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/single/:id" component={Single} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
