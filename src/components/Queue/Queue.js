import React, {useState} from 'react'
import useSideStyles from '../SideBar.styles'
import {Queue} from '../DataStructures/Data'
import Block from '../Block'
import anime from 'animejs'
const Reactqueue = () => {

const classes = useSideStyles();    
const [inputNum, setInput] = useState(0)
const [queue, setQueue] = useState(new Queue())
const [total, setTotal] = useState(0)
const [nums, setNums] = useState([])
const [translateDistance, setDistance] = useState(1000)
const children = []
const distanceArray = []


const addClick = () => {
    queue.add(inputNum)
    setNums([...nums,inputNum])
    setQueue(queue)
    setInput(0)
    setDistance(translateDistance-25)
    anime({
        targets: '#target',
        translateX: translateDistance,
        easing: 'easeInOutSine',
    })
}

const removeClick = () => {
    setTotal(total + queue.remove()); 
    setQueue(queue); 
    setInput(0)
    nums.shift()
}    


for (let i = 0; i < nums.length; i++){
    if ((i+1 < nums.length)){
    children.push(<div key={`${i}Queue`}><Block  number={i} id='' num={nums[i]} boxClass={classes.stacksquare} /></div>)
    } else {
    children.push(<div  key={`${i}Queue`}><Block number={i} id='target' num={nums[i]}  boxClass={classes.stacksquare}/></div>)
    }
}

return (<div className={classes.window}>
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
    <button className={classes.button} onClick={() => addClick()}>Add to Queue</button>
    <button className={classes.button} onClick={() => {queue ? removeClick() : setTotal(total)}}>Remove from Queue</button>
    </div>
    <div className={classes.total}>{total}</div>
<Block num={inputNum} boxClass={classes.square} />
{children}

    </div>)

}

export default Reactqueue