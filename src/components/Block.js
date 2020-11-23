import React from 'react'

const Block = (props) => {
    
    return (
    <div className={props.boxClass} id={props.id}>{props.num}</div>
    )
}

export default Block