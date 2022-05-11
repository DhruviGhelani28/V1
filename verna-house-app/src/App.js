
import './App.css';
import React from 'react';
import Home from './Componants/Home';
import { BrowserRouter as Router, Outlet, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';


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
          <Home />
          {/* <Routes>
            <Route path="/" element={<Home />} exact></Route>
          </Routes> */}
        </Router>
      </ThemeProvider>
    </React.Fragment>


  );
}

export default App;
