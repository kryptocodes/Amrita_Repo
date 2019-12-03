import React from 'react';
import '../css/App.css';
import '../css/home.css';
import Nav from '../Component/nav';
import Tim from '../pages/tim';
import Home from '../pages/home';
import f4f from '../pages/404';
import qp from '../pages/qp/qp';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App(){
    return (
      <Router>
      <div className="App">
       <Nav/>
       <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/timetable" component={Tim}/>
       <Route path="/404" component={f4f}/>
       <Route path="/questionbank" component={qp}/>
        </Switch>
      </div>
      </Router>
    );
}

export default App;
