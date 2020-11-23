import React, {useState} from 'react'
import useSideStyles from '../SideBar.styles'

const BinarySearchTree = () => {

    const classes = useSideStyles();    
    const [inputNum, setInput] = useState(0)
    const [total, setTotal] = useState(0)
    const [translateDistance, setDistance] = useState(1000)
        
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
        </div>
        </div>)

}

export default BinarySearchTree