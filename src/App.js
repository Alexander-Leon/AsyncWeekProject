import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar.js'
import useStyles from './App.styles'
import Stack from './components/Stack/Stack.js'
import LinkedList from './components/LinkedList/LinkedList.js';
import BinarySearchTree from './components/BinarySearchTree/BinarySearchTree.js';
import Queue from './components/Queue/Queue.js'



function App() {
  const classes = useStyles();
  const [display, setDisplay] = useState('Stack')
  let renderDisplay
  switch(display){
    case 'Stack':
      renderDisplay = (<Stack />)
      break;
    case 'Queue': 
    renderDisplay = (<Queue />)
    break;
    case 'Linked List':
      renderDisplay = (<LinkedList />)
      break;
    case 'Binary Search Tree':
      renderDisplay = (<BinarySearchTree />)
      break;
    default:
      renderDisplay = (<Stack />)
    break;
  }
  return (
   <div>
     <Navbar setDisplay={setDisplay} />
     <main className={classes.app}>
      {renderDisplay}
     </main>
     </div>
  );
}

export default App;
