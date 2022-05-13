
import './App.css';
import React from 'react';
import Home from './Componants/Home';
import { BrowserRouter as Router, Outlet, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import classes from '../src/Componants/Login.module.css';


const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

function App() {
  return (

    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Home className={classes.body}/>
          {/* <Routes>
            <Route path="/" element={<Home />} exact></Route>
          </Routes> */}
        </Router>
      </ThemeProvider>
    </React.Fragment>


  );
}

export default App;
