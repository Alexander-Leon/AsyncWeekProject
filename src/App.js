import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js'
import useStyles from './App.styles'
import Stack from './components/Stack/Stack.js'
import Queue from './components/Queue/Queue.js'
import LinkedList from './components/LinkedList/LinkedList.js'
import BinarySearchTree from './components/BinarySearchTree/BinarySearchTree.js'


function App() {
  const classes = useStyles();
  return (
   <Router>
     <Navbar />
     <main className={classes.app}>
       <Route exact path='/' component={Stack}/>
       <Route exact path='/stack' component={Stack}/>
       <Route exact path='/queue' component={Queue}/>
       <Route exact path='/linkedlist' component={LinkedList} />
       <Route exact path='/binarysearchtree' component={BinarySearchTree} />
     </main>
   </Router>
  );
}

export default App;
