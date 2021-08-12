import React from 'react'
import Home from '../src/Home/Home'
import About from '../src/Home/'
import Contact from '../src/Home/Contact/contact'
import login from '../src/Home/Login/Login'
import signup from '../src/Home/signup/signup'

import {BrowserRouter, Route, Link} from "react-router-dom";
import SignUp from '../src/Home/signup/signup'


class App extends React.Component {

  render(){
    return(

            <BrowserRouter>

      <Route exact path="/" Component={Home}/>
      <Route exact path="/about" Component={About}/>
      <Route exact path="/contact" Component={Contact}/>
      <Route exact path="/login" Component={Login}/>
      <Route exact path="/signup" Component={SignUp}/>
            </BrowserRouter>
    )
  }
}

export default App;
