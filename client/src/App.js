import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Error from './Components/404/404';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>

        <Route exact path="/" component={Home} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/register" component={Register} />

        <Route exact path="/dashboard" component={Dashboard} />

        <Route component={Error} />

      </Switch>
    </div>
  );
}

export default App;
