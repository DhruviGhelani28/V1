
import './App.css';
import React from 'react';
import Home from './Componants/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { createTheme } from '@mui/system';
const theme = createTheme(
  {
    palette: {
      primary: {
        main: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: '#000',
      }
    }
  }
)


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
