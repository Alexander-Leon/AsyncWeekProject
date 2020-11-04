import React from 'react';
import {menuItems} from './MenuItems'
import useStyles from './Navbar.styles'

const Navbar = () => {
    const classes = useStyles();
    return (
        <nav className={classes.bar}>
            <h1 className="navbar-logo">React</h1>
            <ul className={classes.menu}>
                {menuItems.map((item, index)=> {
                    return (
                    <li key={index}>
                        <a className={classes.navLinks} href={item.url}>{item.title}</a>
                    </li>
                    )
                })}
                
            </ul>
        </nav>
    )
}

export default Navbar