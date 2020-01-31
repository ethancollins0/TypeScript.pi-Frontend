import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authenticate from "./components/authenticate/authenticate";
import "./styles.scss";
const baseUrl = "http://localhost:3001/";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/authenticate">
            <Authenticate baseUrl={baseUrl} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
