import React from 'react';
import Navigation from './navigation';


const Dashboard = () => {
  return(
    <div className="container">
      <div className="row">
        <h2>Panel Principal</h2>
      </div>
      <div className="row">
        <Navigation />
      </div>
    </div>
  );
};
export default Dashboard;