import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LoginPage from './pages/Login'
import UserRegisterPage from './pages/UserRegister'

import UserSchedulingPage from './pages/UserScheduling'
import UserSchedulesPage from './pages/UserSchedules'

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/cadastro' component={UserRegisterPage} />
            <Route path='/agendar' component={UserSchedulingPage} />
            <Route path='/meus-agendamentos' component={UserSchedulesPage} />

            {/* ALERT: Last router */}
            <Redirect to={{ pathname: '/login' }} />
        </Switch>
    </Router>
  );
}