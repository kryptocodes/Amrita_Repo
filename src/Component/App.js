import React from 'react';
import '../css/App.css';
import '../css/home.css';
import Nav from '../Component/nav';
import Tim from '../pages/tim';
import Home from '../pages/home';
import f4f from '../pages/404';
import qp from '../pages/qp/qp';
import acad from '../pages/acad';
import cirrculum from '../pages/cirrculum';
import sem1 from '../pages/qp/sem1';
import sem2 from '../pages/qp/sem2';
import {BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom';

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
       <Route path="/academic" component={acad}/>
       <Route path="/curriculum" component={cirrculum}/>
       <Route path="/sem1" component={sem1}/>
       <Route path="/sem2" component={sem2}/>
       <Redirect to="/404" /> 
        </Switch>
      </div>
      </Router>
    );
}

export default App;
