import React from 'react';
import {menuItems} from './MenuItems'
import useStyles from './Navbar.styles'

const Navbar = (props) => {
    const classes = useStyles();
    console.log(props)
    return (
        <nav className={classes.bar}>
            <h1 className="navbar-logo">React</h1>
            <ul className={classes.menu}>
                {menuItems.map((item, index)=> {
                    return (
                    <li key={index}>
                        {console.log(item.title)}
                        <button className={classes.navLinks} onClick={() => props.setDisplay(item.title)} >{item.title}</button>
                    </li>
                    )
                })}
                
            </ul>
        </nav>
    )
}

export default Navbar