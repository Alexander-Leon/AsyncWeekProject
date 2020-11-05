import {createUseStyles} from 'react-jss';

export default createUseStyles({
    sideBar:{
        backgroundColor: '#87CEEB',
        display: 'flex',
        width: '15%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
        borderRight: '2px solid black',
    },
    window: {
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    button: {
        display: 'flex',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        margin: '5vh',
        borderRadius: '50%',
        width: '8vw',
        height: '8vw',
        fontSize: '1vw'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        textAlign: 'center',
        width: '100%',
        height: '7.5rem',
        outline: '2px solid black'
    },
    cell: {
        outline: '2px solid black',
        cursor: 'pointer'
    },
    square: {
        display: 'flex',
        width: '28px',
        height: '28px',
        margin: '1px',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stacksquare:{
        display: 'flex',
        width: '28px',
        height: '28px',
        margin: '20px',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0'
    }
    })