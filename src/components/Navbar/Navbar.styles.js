import {createUseStyles} from 'react-jss';

export default createUseStyles({
    bar:{
        backgroundColor: '#87CEEB',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
        outline: '2px solid black'
    },
    menu: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: '10px',
      textAlign: 'center',
      width: '70vw',
      justifyContent: 'end',
      marginRight: '2rem',
      listStyle: 'none'
    },
    navLinks: {
        color: 'white',
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        '&:hover': {
            backgroundColor: '#6d76f7',
            borderRadius: '4px',
            transition: 'all 0.2s ease-out'
        }
    }
   
  })