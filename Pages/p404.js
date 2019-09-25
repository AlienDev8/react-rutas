import React from 'react';
import {Redirect} from 'react-router-dom'; // para Redireccionar a otra pagina

const P404 = () => {
  return (
    <React.Fragment>
      <h2>Pagina 404</h2>
      <p>la pagina no existe</p>
    </React.Fragment>
  )
};
export default P404;