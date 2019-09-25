import React from 'react';
import {Link, withRouter} from 'react-router-dom'; // para navegae entre componentes desde enlaces
import 'bootstrap/dist/css/bootstrap.css';

const Navigation = (props) => {
  const {history,location, match} = props
  console.log(location)
  console.log(match)
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md">
          <button type="button" className="btn btn-primary btn-sm" onClick={() => history.push('/empleados')}>
            Ir a empleados por programacion
          </button>
        </div>
        <div className="col-md">
          <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => history.goBack()}>
            Regresar
          </button>
        </div>
      </div>
      <div className="row">
        <ul>
          <li>
            <Link to="/">ir Dashboard</Link>
          </li>
          <li>
            <Link to="/empleado/999">ir Empleado 999</Link>
          </li>
           <li>
            <Link to="/empleado/999/roberto valles">ir Empleado 999/nombre</Link>
          </li>
          <li>
            <Link to="/empleados">ir Empleados</Link>
          </li>        
        </ul>
      </div>
    </React.Fragment>
  )
};
export default withRouter(Navigation);