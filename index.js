import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Action from './components/Action';
import Strategy from './components/Strategy';
import Fantasy from './components/Fantasy.js';

const Routing = () => {
    return(
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Action" component={Action} />
          <Route path="/Strategy" component={Strategy} />
          <Route path="/Fantasy" component={Fantasy} />
        </Switch>
        <Footer/>
      </Router>
    )
}

ReactDOM.render(
    <React.StrictMode>
      <Routing />
    </React.StrictMode>,
    document.getElementById('container')
  );