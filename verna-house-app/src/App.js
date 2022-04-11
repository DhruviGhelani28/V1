
import './App.css';
import React from 'react';
import Home from './Componants/Home';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';



function App() {
  return (

    <React.Fragment>

      <Router>
        <Home />
       
      </Router>

    </React.Fragment>


  );
}

export default App;
