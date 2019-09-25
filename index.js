
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Dashboard from './Pages/dashboard';
import Empleado from './Pages/empleado';
import Empleados from './Pages/empleados';
import P404 from './Pages/p404';


class Main extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/empleado/:id/:nombre?" component={Empleado} />
          <Route path="/empleados" component={Empleados} />
          <Route path="/p404" component={P404} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("idApp"));