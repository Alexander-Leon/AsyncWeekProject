import React, {useState} from 'react'
import useSideStyles from '../SideBar.styles'
import {Stack} from '../DataStructures/Data'
const Reactstack = () => {
const classes = useSideStyles();
const [stack, setStack] = useState(new Stack) 
const [inputNum, setInput] = useState(0)
const [total, setTotal] = useState(0)
console.log(stack)
const removeClick = () => {
    setTotal(total + stack.remove()); 
    setStack(stack); 
    setInput(0)
}
return (
<div className={classes.window}>
<div className={classes.sideBar}>
    <div>
    <input readOnly value={inputNum} ></input>
        <div className={classes.grid}>
            <button className={classes.cell} onClick={()=> setInput(1)}>1</button>
            <button className={classes.cell} onClick={()=> setInput(2)}>2</button>
            <button className={classes.cell} onClick={()=> setInput(3)}>3</button>
            <button className={classes.cell} onClick={()=> setInput(4)}>4</button>
            <button className={classes.cell} onClick={()=> setInput(5)}>5</button>
            <button className={classes.cell} onClick={()=> setInput(6)}>6</button>
            <button className={classes.cell} onClick={()=> setInput(7)}>7</button>
            <button className={classes.cell} onClick={()=> setInput(8)}>8</button>
            <button className={classes.cell} onClick={()=> setInput(9)}>9</button>
            <button className={classes.cell} onClick={() => {inputNum >= 0 ? setInput(inputNum*-1):setInput(inputNum) }}>-</button>
            <button className={classes.cell} onClick={()=> setInput(0)}>0</button>
            <button className={classes.cell} onClick={() => {inputNum >= 0 ? setInput(inputNum):setInput(inputNum*-1) }}>+</button>
        </div>
    </div>
    <button className={classes.button} onClick={() => {stack.add(inputNum); setStack(stack); setInput(0)}}>Add to Stack</button>
    <button className={classes.button} onClick={() => {stack.top ? removeClick() : setTotal(total)} }>Remove from stack</button>
</div>
<div>
   {total}
</div>
</div>
)

}

export default Reactstack