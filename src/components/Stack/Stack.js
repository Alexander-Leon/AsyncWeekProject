import React, {useState} from 'react'
import useSideStyles from '../SideBar.styles'
import {Stack} from '../DataStructures/Data'
import Block from './Block'
import anime from 'animejs'
const Reactstack = () => {
const classes = useSideStyles();
const [stack, setStack] = useState(new Stack) 
const [inputNum, setInput] = useState(0)
const [total, setTotal] = useState(0)
const [nums, setNums] = useState([])
const [translateDistance, setDistance] = useState(1000)
const children = []

const removeClick = () => {
    anime({
        targets: '#target',
        translateX: -(translateDistance),
        easing: 'easeInOutSine',
    })
    setTotal(total + stack.remove()); 
    setStack(stack); 
    nums.pop()
    setInput(0)
    setDistance(translateDistance+25)
    
}

const addClick = () => {
    stack.add(inputNum); 
    setNums([
    ...nums,inputNum
    ])
    setStack(stack); 
    setInput(0);
    setDistance(translateDistance-25)
    anime({
        targets: '#target',
        translateX: translateDistance,
        easing: 'easeInOutSine',
    })
}

for (let i = 0; i < nums.length; i++){
    if ((i+1 < nums.length)){
    children.push(<div><Block key={i} number={i} id='' num={nums[i]} boxClass={classes.stacksquare} /></div>)
    } else {
    children.push(<div><Block key={i} number={i} id='target' num={nums[i]}  boxClass={classes.stacksquare}/></div>)
    }
}


return (
<div className={classes.window}>
<div className={classes.sideBar}>
    <button onClick={() => setTotal(0)}>Clear Total</button>
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
    <button className={classes.button} onClick={() => addClick()}>Add to Stack</button>
    <button className={classes.button} onClick={() => {stack.top ? removeClick() : setTotal(total)} }>Remove from stack</button>
</div>
<div>
<div className={classes.total}>{total}</div>
<Block num={inputNum} boxClass={classes.square} />
<div>
{children}
</div>
</div>
</div>
)

}

export default Reactstack