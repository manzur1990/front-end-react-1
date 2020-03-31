import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import TaskList from './components/TaskList'
import FormikLoginPage from './components/LoginPage'
import FormikRegisterPage from './components/Register'
import './App.css';

const App = () => {
  return (
    <div className="appPage">
      <Header/>
      <Switch>
        <Route path="/tasks"><TaskList /></Route>
        <Route exact path="/"><FormikLoginPage /></Route>
        <Route path="/register"><FormikRegisterPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
