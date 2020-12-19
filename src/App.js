import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Services
import NewsDisplay from "./components/NewsDisplay";
import CategorizedNewsDisplay from "./components/CategorizedNewsDisplay";


export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <NewsDisplay />
          </Route>
          <Route path="/:id" render={(props) => <CategorizedNewsDisplay {...props}/>}  />
        </Switch>
      </div>
    </Router>
  );
}