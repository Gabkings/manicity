import React from 'react';
import './Resources/css/app.css'
import Layout from './Hoc/Layout'
import {Switch, Route} from 'react-router-dom'
import Home from './components/home/index'
import SignIn from './components/login/index'
import Index from './components/admin/matches/index'


import Dashboard from './components/admin/Dashboard'
import PrivateRoute from './components/authRoutes/privateRoute'
import PublicRoute from './components/authRoutes/publicRoute'

const Routes = (props) =>{
    return (
      <Layout>
        <Switch>
          <PrivateRoute {...props} path="/dashbaord" component={Dashboard} exact />
          <PrivateRoute {...props} path="/admin_matches" component={Index} exact />
          {/* {props.user  ? null :<PublicRoute component={SignIn} {...props} restricted={true} path="/sign-in" /> } */}
          <PublicRoute component={SignIn} {...props} restricted={true} path="/sign-in" />
          <PublicRoute component={Home} {...props} restricted={false} exact path="/" />
        </Switch>
      </Layout>
    );
}

export default Routes;
