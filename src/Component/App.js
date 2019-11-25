import React from 'react';
import '../css/App.css';
import Nav from '../Component/nav';
import Tim from '../pages/tim';
import Note from '../pages/Note';
import Home from '../pages/home';
import sem1 from '../pages/sem/sem1';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App(){
    return (
      <Router>
      <div className="App">
       <Nav/>
       <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/timetable" component={Tim}/>
       <Route path="/notes" component={Note}/>
       <Route path="/sem1" component={sem1}/>
        </Switch>
      </div>
      </Router>
    );
}

export default App;
