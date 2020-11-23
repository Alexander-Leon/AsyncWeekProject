import React, {useState} from 'react'
import useSideStyles from '../SideBar.styles'
import useListStyles from './LL.styles'
import anime from 'animejs'
import {LinkedList} from '../DataStructures/Data' 
import Block from '../Block'

const ReactLinkedList = () => {
const classes = useSideStyles();
const liststyles = useListStyles();
const [inputNum, setInput] = useState(0)
const [list, setList] = useState(new LinkedList)
const [nums, setNums] = useState([])
const children = []



const addClick = () => {
   list.addToTail(inputNum)
   setNums([...nums, inputNum])
   setList(list)
   setInput(0)
}

const removeClick = () => {
   list.removeFromTail()
   setList(list)
   setInput(0)
   nums.pop()
   setNums(nums)
}   




for (let i = 0; i < nums.length; i++){
    if ((i+1 < nums.length)){
    children.push(
    <div  key={`${i}List`} className={liststyles.listdiv}>
    <Block number={i} id='' num={nums[i]} boxClass={classes.listsquare} />
    <span>&#8594;</span>
    </div>)
    } else {
    children.push(
    <div key={`${i}List`} id='target' className={liststyles.listdiv}>
        <Block number={i} num={nums[i]}  boxClass={classes.listsquare}/>
        </div>)
    }
}


return (
<div className={classes.window}>
<div className={classes.sideBar}>
    <button onClick={() => {setNums([]); setList(new LinkedList) }}>Clear List</button>
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
        <button className={classes.button} onClick={() => addClick()}>Add to List</button>
    <button className={classes.button} onClick={() => {list ? removeClick() : console.log('nothing here')}}>Remove from List</button>
</div>
<Block num={inputNum} boxClass={classes.square} />
{children}
</div>
)

}

export default ReactLinkedList