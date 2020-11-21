import React from 'react';
import './Resources/css/app.css'
import Layout from './Hoc/Layout'
import {Switch, Route} from 'react-router-dom'
import Home from './components/home/index'
import SignIn from './components/login/index'


import Dashboard from './components/admin/Dashboard'

const Routes = (props) =>{
    return (
      <Layout>
        <Switch>
          <Route component={SignIn} path="/sign-in" />
          <Route component={Dashboard} path="/dashbaord" />
          <Route component={Home} path="/" />
        </Switch>
      </Layout>
    );
}

export default Routes;
