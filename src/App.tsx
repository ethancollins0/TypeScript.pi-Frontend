import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authenticate from "./components/authenticate/authenticate";
import "./styles.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/authenticate">
            <Authenticate />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
