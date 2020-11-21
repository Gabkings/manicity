import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom'
import {firebase} from './firebase'

import './firebase'

const App = (props)=>{
  return(
    <BrowserRouter>
      <Routes {...props}/>
    </BrowserRouter>
  )
}

firebase.auth().onAuthStateChanged((user)=>{
  ReactDOM.render(
    <App  user={user}/>,
  document.getElementById('root')
);
})




