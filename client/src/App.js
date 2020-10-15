import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Error from './Components/404/404';
import AllProtest from './Pages/AllProtest';
import Protestform from "./Components/Auth/Protestform";
import SingleProtest from './Pages/SingleProtest';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>

        <Route exact path="/" component={Home} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/createprotest" component={Protestform} />
        <Route exact path="/signup" component={Register} />

        <Route exact path="/all-protests" component={AllProtest} />

        <Route exact path="/protest/:protestId" component={SingleProtest} />

        <Route component={Error} />

      </Switch>
    </div>
  );
}

export default App;
