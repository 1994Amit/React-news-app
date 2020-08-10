import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import news from "./components/news";
import Createnews from "./components/create";
import details from "./components/Details"

function App() {
  // const document=[
  //   {  
  //   headline:'',
  //   description:'',
  //   author:'',
  //   date:''
  //   }
  
  // ]
  // localStorage.setItem('document',JSON.stringify(document));
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
         
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
           <center> <h3>News APP</h3></center>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/news"}>HomePage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/news/create"}>Create add</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={news} />
            <Route exact path="/news" component={news} />
            <Route exact path="/news/create" component={Createnews} />
            <Route exact path="/news/:id" component={details} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;