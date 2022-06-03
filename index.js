import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Service from './components/Action';
import Service from './components/Strategy';
import Service from './components/Fantasy.js';

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