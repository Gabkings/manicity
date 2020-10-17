import React from 'react';
import './Resources/css/app.css'
import Layout from './Hoc/Layout'
import {Switch, Route} from 'react-router-dom'
import Home from './components/home/index'

const Routes = (props) =>{
    return (
      <Layout>
        <Switch>
          <Route component={Home} path="/" />
        </Switch>
      </Layout>
    );
}

export default Routes;
