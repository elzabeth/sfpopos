import React from 'react'
import { HashRouter as Router, Switch, Route } from "react-router-dom"

import Title from './Title'
import About from './About'
import POPOSList from './POPOSList'
import Footer from './Footer'

export default function App() {
    return (
        <div className="App">
            <Title />
            <Router>
                <Switch>
                    <Route exact path="/" component={POPOSList} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>
            <Footer />
        </div> 
  );
}