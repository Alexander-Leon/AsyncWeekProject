import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js'
import useStyles from './App.styles'
import Stack from './components/Stack/Stack.js'



function App() {
  const classes = useStyles();
  return (
   <Router>
     <Navbar />
     <main className={classes.app}>
      <Stack />
     </main>
   </Router>
  );
}

export default App;
