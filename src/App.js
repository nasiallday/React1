import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import './App.css';

import DirectionsRun from '@material-ui/icons/DirectionsRun';
import Eco from '@material-ui/icons/Eco';
import ChildCare from '@material-ui/icons/ChildCare';


const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Hello TechLadies, I am Maria!
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            I am interested in learning about programming. I hope to design my own simple web game one day and bring a moment of joy to people. Here are some things I identify with:
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<DirectionsRun style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Park Connector Inspector" btnTitle="Show me a pic" />
          <Grid icon={<Eco style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Plant Mummy" btnTitle="Show me a pic!"/>
          <Grid icon={<ChildCare style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="'Cher'" btnTitle="Say what?" onClick="window.location='http://www.google.com';"/>
        </div>

      </ThemeProvider>
    </div>
  );
}

export default App;
