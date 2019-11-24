import React from 'react';
import './App.css';
import Nav from './nav';
import Tim from './tim';
import Home from './home';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
function App(){
    return (
      <Router>
      <div className="App">
       <Nav/>
       <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/timetable" component={Tim}/>
        </Switch>
      </div>
      </Router>
    );
}

export default App;
